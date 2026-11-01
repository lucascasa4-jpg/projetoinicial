
/* =========================================
   FOCO NO ESPORTE
   Catálogo e história dos clubes brasileiros
========================================= */

// Elementos da página
const lista = document.getElementById("listaClubes");
const busca = document.getElementById("busca");
const filtroRegiao = document.getElementById("filtroRegiao");
const filtroEstado = document.getElementById("filtroEstado");
const filtroCategoria = document.getElementById("filtroCategoria");
const quantidade = document.getElementById("quantidadeResultados");
const semResultados = document.getElementById("semResultados");
const modal = document.getElementById("modalClube");

// Verifica se os elementos principais existem no HTML
if (
  !lista ||
  !busca ||
  !filtroRegiao ||
  !filtroEstado ||
  !filtroCategoria ||
  !quantidade ||
  !semResultados ||
  !modal
) {
  console.error(
    "Foco no Esporte: confira os IDs dos elementos no index.html."
  );
} else {

// =========================================
// DADOS DOS CLUBES
// Acrescente os demais clubes nesta lista.
// =========================================

const clubes = [
   {
    nome: "Bangu",
    sigla: "BAN",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    regiao: "Sudeste",
    fundacao: 1904,
    tipo: "Tradicional",
    cor: "#c8102e",
    estadio: "Estádio Moça Bonita",
    historia: "Clube tradicional da Zona Oeste do Rio de Janeiro, com destaque na história do Campeonato Carioca.",
    titulos: "Campeonatos Cariocas de 1933 e 1966.",
    curiosidade: "Foi vice-campeão brasileiro em 1985."
  },
  {
    nome: "Flamengo",
    sigla: "FLA",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    regiao: "Sudeste",
    fundacao: 1895,
    tipo: "Grande",
    cor: "#e30613",
    estadio: "Maracanã",
    historia: "Fundado em 1895, o Clube de Regatas do Flamengo nasceu como uma agremiação de remo e se tornou um dos clubes mais populares do Brasil.",
    titulos: "Conquistas nacionais e internacionais em diferentes competições.",
    curiosidade: "O futebol do clube foi organizado oficialmente em 1911."
  },
  {
    nome: "Fluminense",
    sigla: "FLU",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    regiao: "Sudeste",
    fundacao: 1902,
    tipo: "Grande",
    cor: "#a00000",
    estadio: "Maracanã",
    historia: "Fundado em 1902, o Fluminense é um dos clubes tradicionais do futebol brasileiro e tem uma longa história no esporte carioca.",
    titulos: "Conquistas estaduais, nacionais e internacionais.",
    curiosidade: "O clube foi fundado no bairro das Laranjeiras, no Rio de Janeiro."
  },
  {
    nome: "Vasco da Gama",
    sigla: "VAS",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    regiao: "Sudeste",
    fundacao: 1898,
    tipo: "Grande",
    cor: "#111111",
    estadio: "São Januário",
    historia: "Fundado em 1898, o Club de Regatas Vasco da Gama construiu uma trajetória marcante no esporte brasileiro.",
    titulos: "Conquistas estaduais, nacionais e internacionais.",
    curiosidade: "São Januário foi inaugurado em 1927."
  },
  {
    nome: "Botafogo",
    sigla: "BOT",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    regiao: "Sudeste",
    fundacao: 1904,
    tipo: "Grande",
    cor: "#111111",
    estadio: "Estádio Nilton Santos",
    historia: "Fundado em 1904, o Botafogo é um dos clubes históricos do futebol carioca, conhecido por sua tradição e por grandes jogadores.",
    titulos: "Conquistas estaduais, nacionais e internacionais.",
    curiosidade: "O clube tem uma estrela solitária como um dos principais símbolos."
  },
  {
    nome: "Corinthians",
    sigla: "COR",
    cidade: "São Paulo",
    estado: "SP",
    regiao: "Sudeste",
    fundacao: 1910,
    tipo: "Grande",
    cor: "#111111",
    estadio: "Neo Química Arena",
    historia: "Fundado em 1910, o Sport Club Corinthians Paulista construiu uma grande torcida e uma história importante no futebol brasileiro.",
    titulos: "Conquistas estaduais, nacionais e mundiais.",
    curiosidade: "O clube foi fundado por um grupo de trabalhadores no bairro do Bom Retiro."
  },
  {
    nome: "Palmeiras",
    sigla: "PAL",
    cidade: "São Paulo",
    estado: "SP",
    regiao: "Sudeste",
    fundacao: 1914,
    tipo: "Grande",
    cor: "#087a3d",
    estadio: "Allianz Parque",
    historia: "Fundado em 1914 como Palestra Italia, o Palmeiras é um dos clubes mais tradicionais do futebol brasileiro.",
    titulos: "Conquistas estaduais, nacionais e internacionais.",
    curiosidade: "O clube adotou o nome Palmeiras em 1942."
  },
  {
    nome: "Santos",
    sigla: "SAN",
    cidade: "Santos",
    estado: "SP",
    regiao: "Sudeste",
    fundacao: 1912,
    tipo: "Grande",
    cor: "#222222",
    estadio: "Vila Belmiro",
    historia: "Fundado em 1912, o Santos ganhou projeção internacional com equipes históricas e grandes jogadores.",
    titulos: "Conquistas estaduais, nacionais e internacionais.",
    curiosidade: "Pelé construiu grande parte de sua carreira no clube."
  },
  {
    nome: "Grêmio",
    sigla: "GRE",
    cidade: "Porto Alegre",
    estado: "RS",
    regiao: "Sul",
    fundacao: 1903,
    tipo: "Grande",
    cor: "#1685bd",
    estadio: "Arena do Grêmio",
    historia: "Fundado em 1903, o Grêmio é um clube tradicional do futebol gaúcho e brasileiro.",
    titulos: "Conquistas estaduais, nacionais e internacionais.",
    curiosidade: "Suas cores tradicionais são azul, preto e branco."
  },
  {
    nome: "Internacional",
    sigla: "INT",
    cidade: "Porto Alegre",
    estado: "RS",
    regiao: "Sul",
    fundacao: 1909,
    tipo: "Grande",
    cor: "#d71920",
    estadio: "Beira-Rio",
    historia: "Fundado em 1909, o Sport Club Internacional tem uma longa trajetória no futebol do Rio Grande do Sul.",
    titulos: "Conquistas estaduais, nacionais e internacionais.",
    curiosidade: "O Beira-Rio é a casa tradicional do clube."
  },
  {
    nome: "Bahia",
    sigla: "BAH",
    cidade: "Salvador",
    estado: "BA",
    regiao: "Nordeste",
    fundacao: 1931,
    tipo: "Tradicional",
    cor: "#1685d1",
    estadio: "Arena Fonte Nova",
    historia: "Fundado em 1931, o Esporte Clube Bahia é uma das principais instituições do futebol nordestino.",
    titulos: "Conquistas estaduais e nacionais.",
    curiosidade: "O clube foi o primeiro campeão brasileiro da era Taça Brasil, em 1959."
  },
  {
    nome: "Sport Recife",
    sigla: "SPT",
    cidade: "Recife",
    estado: "PE",
    regiao: "Nordeste",
    fundacao: 1905,
    tipo: "Tradicional",
    cor: "#d71920",
    estadio: "Ilha do Retiro",
    historia: "Fundado em 1905, o Sport Club do Recife possui uma história importante no futebol pernambucano.",
    titulos: "Conquistas estaduais e nacionais.",
    curiosidade: "O leão é o mascote tradicional do clube."
  },
  {
    nome: "Paysandu",
    sigla: "PAY",
    cidade: "Belém",
    estado: "PA",
    regiao: "Norte",
    fundacao: 1914,
    tipo: "Tradicional",
    cor: "#1764a0",
    estadio: "Curuzu",
    historia: "Fundado em 1914, o Paysandu Sport Club é um dos clubes tradicionais do futebol paraense.",
    titulos: "Conquistas estaduais e regionais.",
    curiosidade: "O clube é conhecido pelo apelido Papão da Curuzu."
  }
];

// =========================================
// NOMES DOS ESTADOS
// =========================================

const nomesEstados = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goiás",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraima",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins"
};

// =========================================
// FUNÇÕES AUXILIARES
// =========================================

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

// =========================================
// CONTADORES
// =========================================

const totalClubes = document.getElementById("totalClubes");
const anoAtual = document.getElementById("anoAtual");

if (totalClubes) {
  totalClubes.textContent = clubes.length;
}

if (anoAtual) {
  anoAtual.textContent = new Date().getFullYear();
}

// =========================================
// PREENCHE OS ESTADOS
// =========================================

function preencherEstados() {
  const estados = [
    ...new Set(clubes.map(clube => clube.estado))
  ].sort();

  estados.forEach(sigla => {
    const existe = [...filtroEstado.options]
      .some(option => option.value === sigla);

    if (existe) return;

    const option = document.createElement("option");
    option.value = sigla;
    option.textContent = nomesEstados[sigla] || sigla;

    filtroEstado.appendChild(option);
  });
}

// =========================================
// MOSTRA OS CLUBES
// =========================================

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
      const correspondeRegiao =
        !regiao || clube.regiao === regiao;
      const correspondeEstado =
        !estado || clube.estado === estado;
      const categoriaAtual = categoriaClube(clube);

      const correspondeCategoria =
        !categoria ||
        categoriaAtual === categoria ||
        (
          categoria === "Histórico" &&
          Number(clube.fundacao) < 1930 &&
          categoriaAtual !== "Grande"
        );

      return (
        correspondeBusca &&
        correspondeRegiao &&
        correspondeEstado &&
        correspondeCategoria
      );
    });

  lista.innerHTML = "";

  encontrados.forEach(({ clube, indice }) => {
    const card = document.createElement("button");

    card.className = "clube-card";
    card.type = "button";
    card.dataset.indice = indice;
    card.style.setProperty(
      "--cor-clube",
      clube.cor || "#e50914"
    );

    const simbolo = document.createElement("span");
    simbolo.className = "clube-simbolo";
    simbolo.textContent =
      clube.sigla || clube.nome.substring(0, 3).toUpperCase();

    const regiaoTexto = document.createElement("span");
    regiaoTexto.className = "clube-regiao";
    regiaoTexto.textContent =
      `${clube.regiao} • ${clube.estado}`;

    const titulo = document.createElement("h3");
    titulo.textContent = clube.nome;

    const cidade = document.createElement("p");
    cidade.textContent =
      `${clube.cidade} - ${clube.estado}`;

    const link = document.createElement("span");
    link.className = "ver-historia";
    link.textContent = "CONHECER HISTÓRIA →";

    card.append(
      simbolo,
      regiaoTexto,
      titulo,
      cidade,
      link
    );

    card.addEventListener("click", () => {
      abrirHistoria(indice);
    });

    lista.appendChild(card);
  });

  quantidade.textContent =
    `${encontrados.length} ${
      encontrados.length === 1
        ? "clube encontrado"
        : "clubes encontrados"
    }`;

  semResultados.hidden = encontrados.length > 0;
  lista.hidden = encontrados.length === 0;
}

// =========================================
// ABRE A FICHA DO CLUBE
// =========================================

function abrirHistoria(indice) {
  const clube = clubes[indice];

  if (!clube) return;

  const preencher = (id, texto) => {
    const elemento = document.getElementById(id);

    if (elemento) {
      elemento.textContent = texto;
    }
  };

  preencher(
    "modalSigla",
    clube.sigla || clube.nome.substring(0, 3).toUpperCase()
  );

  preencher("modalCategoria", categoriaClube(clube));

  preencher(
    "modalLocal",
    `${clube.regiao} • ${nomesEstados[clube.estado] || clube.estado}`
  );

  preencher("modalNome", clube.nome);
  preencher("modalFundacao", `Fundado em ${clube.fundacao}`);

  preencher(
    "modalEstadio",
    clube.estadio || "Informação não cadastrada"
  );

  preencher(
    "modalCidade",
    `${clube.cidade} - ${nomesEstados[clube.estado] || clube.estado}`
  );

  preencher(
    "modalHistoria",
    clube.historia || clube.resumo || "História em atualização."
  );

  preencher(
    "modalTitulos",
    clube.titulos || "Informações sobre títulos em atualização."
  );

  preencher(
    "modalCuriosidade",
    clube.curiosidades ||
    clube.curiosidade ||
    "Curiosidades em atualização."
  );

  modal.classList.add("aberto");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-aberto");
}

// =========================================
// FECHA A FICHA
// =========================================

function fecharHistoria() {
  modal.classList.remove("aberto");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-aberto");
}

// =========================================
// PESQUISA E FILTROS
// =========================================

busca.addEventListener("input", mostrarClubes);
filtroRegiao.addEventListener("change", mostrarClubes);
filtroEstado.addEventListener("change", mostrarClubes);
filtroCategoria.addEventListener("change", mostrarClubes);

// =========================================
// LIMPAR FILTROS
// =========================================

const limparFiltros = document.getElementById("limparFiltros");

if (limparFiltros) {
  limparFiltros.addEventListener("click", () => {
    busca.value = "";
    filtroRegiao.value = "";
    filtroEstado.value = "";
    filtroCategoria.value = "";

    mostrarClubes();
  });
}

// =========================================
// BOTÕES DE FECHAMENTO
// =========================================

modal.querySelectorAll("[data-fechar]").forEach(elemento => {
  elemento.addEventListener("click", fecharHistoria);
});

// Fechar clicando fora do conteúdo do modal
modal.addEventListener("click", evento => {
  if (evento.target === modal) {
    fecharHistoria();
  }
});

// Fechar com ESC
document.addEventListener("keydown", evento => {
  if (evento.key === "Escape") {
    fecharHistoria();
  }
});

// =========================================
// INICIALIZAÇÃO
// =========================================

preencherEstados();
mostrarClubes();

} // Fim da verificação dos elementos do HTML
