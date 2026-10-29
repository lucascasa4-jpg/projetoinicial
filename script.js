
// Elementos da página
const lista = document.getElementById("listaClubes");
const busca = document.getElementById("busca");
const filtroRegiao = document.getElementById("filtroRegiao");
const filtroEstado = document.getElementById("filtroEstado");
const filtroCategoria = document.getElementById("filtroCategoria");
const quantidade = document.getElementById("quantidadeResultados");
const semResultados = document.getElementById("semResultados");
const modal = document.getElementById("modalClube");

// Tradução das siglas dos estados
const nomesEstados = {
  AC: "Acre", AL: "Alagoas", AP: "Amapá", AM: "Amazonas",
  BA: "Bahia", CE: "Ceará", DF: "Distrito Federal",
  ES: "Espírito Santo", GO: "Goiás", MA: "Maranhão",
  MT: "Mato Grosso", MS: "Mato Grosso do Sul", MG: "Minas Gerais",
  PA: "Pará", PB: "Paraíba", PR: "Paraná", PE: "Pernambuco",
  PI: "Piauí", RJ: "Rio de Janeiro", RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul", RO: "Rondônia", RR: "Roraima",
  SC: "Santa Catarina", SP: "São Paulo", SE: "Sergipe",
  TO: "Tocantins"
};

function normalizar(texto) {
  return String(texto || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function categoriaClube(clube) {
  if (clube.tipo) return clube.tipo;

  return Number(clube.fundacao) < 1930
    ? "Histórico"
    : "Regional";
}

// Atualiza o contador
document.getElementById("totalClubes").textContent = clubes.length;
document.getElementById("anoAtual").textContent = new Date().getFullYear();

// Preenche os estados disponíveis
function preencherEstados() {
  const estados = [...new Set(clubes.map(clube => clube.estado))].sort();

  estados.forEach(sigla => {
    const option = document.createElement("option");
    option.value = sigla;
    option.textContent = nomesEstados[sigla] || sigla;
    filtroEstado.appendChild(option);
  });
}

// Mostra os clubes
function mostrarClubes() {
  const termo = normalizar(busca.value);
  const regiao = filtroRegiao.value;
  const estado = filtroEstado.value;
  const categoria = filtroCategoria.value;

  const encontrados = clubes
    .map((clube, indice) => ({ clube, indice }))
    .filter(({ clube }) => {
      const texto = normalizar([
        clube.nome,
        clube.cidade,
        clube.estado,
        nomesEstados[clube.estado],
        clube.regiao
      ].join(" "));

      const correspondeBusca = texto.includes(termo);
      const correspondeRegiao = !regiao || clube.regiao === regiao;
      const correspondeEstado = !estado || clube.estado === estado;
      const categoriaAtual = categoriaClube(clube);

      const correspondeCategoria =
        !categoria ||
        categoriaAtual === categoria ||
        (
          categoria === "Histórico" &&
          Number(clube.fundacao) < 1930 &&
          categoriaAtual !== "Grande"
        );

      return correspondeBusca &&
        correspondeRegiao &&
        correspondeEstado &&
        correspondeCategoria;
    });

  lista.innerHTML = "";

  encontrados.forEach(({ clube, indice }) => {
    const card = document.createElement("button");
    card.className = "clube-card";
    card.type = "button";
    card.dataset.indice = indice;
    card.style.setProperty("--cor-clube", clube.cor || "#ff6b21");

    const simbolo = document.createElement("span");
    simbolo.className = "clube-simbolo";
    simbolo.textContent = clube.sigla ||
      clube.nome.substring(0, 3).toUpperCase();

    const regiaoTexto = document.createElement("span");
    regiaoTexto.className = "clube-regiao";
    regiaoTexto.textContent =
      `${clube.regiao} • ${clube.estado}`;

    const titulo = document.createElement("h3");
    titulo.textContent = clube.nome;

    const cidade = document.createElement("p");
    cidade.textContent = `${clube.cidade} - ${clube.estado}`;

    const link = document.createElement("span");
    link.className = "ver-historia";
    link.textContent = "CONHECER HISTÓRIA →";

    card.append(simbolo, regiaoTexto, titulo, cidade, link);

    card.addEventListener("click", () => abrirHistoria(indice));

    lista.appendChild(card);
  });

  quantidade.textContent =
    `${encontrados.length} ${encontrados.length === 1
      ? "clube encontrado"
      : "clubes encontrados"}`;

  semResultados.hidden = encontrados.length > 0;
  lista.hidden = encontrados.length === 0;
}

// Abre a ficha histórica
function abrirHistoria(indice) {
  const clube = clubes[indice];

  if (!clube) return;

  document.getElementById("modalSigla").textContent =
    clube.sigla || clube.nome.substring(0, 3).toUpperCase();

  document.getElementById("modalCategoria").textContent =
    categoriaClube(clube);

  document.getElementById("modalLocal").textContent =
    `${clube.regiao} • ${nomesEstados[clube.estado] || clube.estado}`;

  document.getElementById("modalNome").textContent = clube.nome;

  document.getElementById("modalFundacao").textContent =
    `Fundado em ${clube.fundacao}`;

  document.getElementById("modalEstadio").textContent =
    clube.estadio || "Informação não cadastrada";

  document.getElementById("modalCidade").textContent =
    `${clube.cidade} - ${nomesEstados[clube.estado] || clube.estado}`;

  document.getElementById("modalHistoria").textContent =
    clube.historia || clube.resumo || "História em atualização.";

  document.getElementById("modalTitulos").textContent =
    clube.titulos || "Informações sobre títulos ainda em atualização.";

  document.getElementById("modalCuriosidade").textContent =
    clube.curiosidades || clube.curiosidade || "Curiosidades em atualização.";

  modal.classList.add("aberto");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-aberto");
}

// Fecha a ficha
function fecharHistoria() {
  modal.classList.remove("aberto");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-aberto");
}

// Pesquisa e filtros
busca.addEventListener("input", mostrarClubes);
filtroRegiao.addEventListener("change", mostrarClubes);
filtroEstado.addEventListener("change", mostrarClubes);
filtroCategoria.addEventListener("change", mostrarClubes);

// Limpa todos os filtros
document.getElementById("limparFiltros").addEventListener("click", () => {
  busca.value = "";
  filtroRegiao.value = "";
  filtroEstado.value = "";
  filtroCategoria.value = "";
  mostrarClubes();
});

// Botões de fechamento do modal
modal.querySelectorAll("[data-fechar]").forEach(elemento => {
  elemento.addEventListener("click", fecharHistoria);
});

// Fecha com ESC
document.addEventListener("keydown", evento => {
  if (evento.key === "Escape") fecharHistoria();
});

// Inicialização
preencherEstados();
mostrarClubes();
