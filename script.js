```javascript
// =====================================
// ELEMENTOS
// =====================================

const textoVersiculo =
    document.getElementById("textoVersiculo");

const referencia =
    document.getElementById("referencia");

const botaoOuvir =
    document.getElementById("ouvir");

const botaoFavoritar =
    document.getElementById("favoritar");

const botaoCopiar =
    document.getElementById("copiar");

const botaoCompartilhar =
    document.getElementById("compartilhar");

const botaoTema =
    document.getElementById("botaoTema");

const textoOracao =
    document.getElementById("textoOracao");

const botaoOuvirOracao =
    document.getElementById("ouvirOracao");

const campoPesquisa =
    document.getElementById("campoPesquisa");

const botaoPesquisa =
    document.getElementById("botaoPesquisa");

const resultadoPesquisa =
    document.getElementById("resultadoPesquisa");

const aviso =
    document.getElementById("aviso");


// =====================================
// VERSÍCULO
// =====================================

const versiculoTexto =
    "O Senhor é o meu pastor; nada me faltará.";

const versiculoReferencia =
    "Salmos 23:1";


// =====================================
// LEITURA POR VOZ
// =====================================

function falar(texto) {

    if (!("speechSynthesis" in window)) {

        alert(
            "Seu navegador não suporta leitura por voz."
        );

        return;
    }

    speechSynthesis.cancel();

    const voz =
        new SpeechSynthesisUtterance(texto);

    voz.lang = "pt-BR";

    voz.rate = 0.85;

    voz.pitch = 1;

    speechSynthesis.speak(voz);
}


// =====================================
// OUVIR VERSÍCULO
// =====================================

botaoOuvir.addEventListener(
    "click",
    function() {

        falar(
            versiculoTexto +
            ". " +
            versiculoReferencia
        );

    }
);


// =====================================
// OUVIR ORAÇÃO
// =====================================

botaoOuvirOracao.addEventListener(
    "click",
    function() {

        falar(textoOracao.textContent);

    }
);


// =====================================
// FAVORITO
// =====================================

let favorito =
    localStorage.getItem("versiculoFavorito") === "true";


function atualizarFavorito() {

    if (favorito) {

        botaoFavoritar.textContent =
            "❤️ Favoritado";

        botaoFavoritar.classList.add(
            "favoritado"
        );

    } else {

        botaoFavoritar.textContent =
            "🤍 Favoritar";

        botaoFavoritar.classList.remove(
            "favoritado"
        );

    }
}


atualizarFavorito();


botaoFavoritar.addEventListener(
    "click",
    function() {

        favorito = !favorito;

        localStorage.setItem(
            "versiculoFavorito",
            favorito
        );

        atualizarFavorito();

    }
);


// =====================================
// COPIAR
// =====================================

botaoCopiar.addEventListener(
    "click",
    async function() {

        const texto =
            `"${versiculoTexto}"\n\n` +
            versiculoReferencia;

        try {

            await navigator.clipboard.writeText(
                texto
            );

            mostrarAviso(
                "📋 Versículo copiado!"
            );

        } catch {

            mostrarAviso(
                "Não foi possível copiar."
            );

        }

    }
);


// =====================================
// COMPARTILHAR
// =====================================

botaoCompartilhar.addEventListener(
    "click",
    async function() {

        const texto =
            `"${versiculoTexto}" - ` +
            versiculoReferencia +
            "\n\n" +
            "📖 Palavra Viva";

        if (navigator.share) {

            try {

                await navigator.share({
                    title: "Versículo do Dia",
                    text: texto
                });

            } catch {

                // Usuário cancelou o compartilhamento

            }

        } else {

            try {

                await navigator.clipboard.writeText(
                    texto
                );

                mostrarAviso(
                    "📤 Texto copiado para compartilhar!"
                );

            } catch {

                mostrarAviso(
                    "Não foi possível compartilhar."
                );

            }

        }

    }
);


// =====================================
// TEMA
// =====================================

const temaSalvo =
    localStorage.getItem("temaEscuro");


if (temaSalvo === "true") {

    document.body.classList.add("escuro");

    botaoTema.textContent = "☀️";

}


botaoTema.addEventListener(
    "click",
    function() {

        document.body.classList.toggle(
            "escuro"
        );

        const escuro =
            document.body.classList.contains(
                "escuro"
            );

        localStorage.setItem(
            "temaEscuro",
            escuro
        );

        botaoTema.textContent =
            escuro ? "☀️" : "🌙";

    }
);


// =====================================
// PESQUISA BÍBLICA
// =====================================

const versiculos = [

    {
        referencia: "Salmos 23:1",
        texto:
            "O Senhor é o meu pastor; nada me faltará."
    },

    {
        referencia: "João 3:16",
        texto:
            "Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna."
    },

    {
        referencia: "Filipenses 4:13",
        texto:
            "Posso todas as coisas naquele que me fortalece."
    },

    {
        referencia: "Jeremias 29:11",
        texto:
            "Porque eu bem sei os pensamentos que penso de vós, diz o Senhor; pensamentos de paz e não de mal, para vos dar o fim que esperais."
    },

    {
        referencia: "Isaías 41:10",
        texto:
            "Não temas, porque eu sou contigo; não te assombres, porque eu sou teu Deus."
    },

    {
        referencia: "Salmos 46:1",
        texto:
            "Deus é o nosso refúgio e fortaleza, socorro bem presente na angústia."
    },

    {
        referencia: "Provérbios 3:5",
        texto:
            "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento."
    }

];


function pesquisarBiblia() {

    const termo =
        campoPesquisa.value
            .trim()
            .toLowerCase();


    if (termo === "") {

        resultadoPesquisa.innerHTML = `
            <div class="resultado-item">
                <strong>🔎 Pesquise um tema</strong>
                <p>
                    Digite uma palavra como
                    <b>fé</b>, <b>amor</b>,
                    <b>Deus</b> ou <b>esperança</b>.
                </p>
            </div>
        `;

        return;
    }


    const resultados =
        versiculos.filter(item =>
            item.texto
                .toLowerCase()
                .includes(termo)
            ||
            item.referencia
                .toLowerCase()
                .includes(termo)
        );


    if (resultados.length === 0) {

        resultadoPesquisa.innerHTML = `
            <div class="resultado-item">
                <strong>😔 Nenhum resultado encontrado</strong>
                <p>
                    Tente outra palavra.
                </p>
            </div>
        `;

        return;
    }


    resultadoPesquisa.innerHTML =
        resultados.map(item => `

            <div class="resultado-item">

                <strong>
                    📖 ${item.referencia}
                </strong>

                <p>
                    "${item.texto}"
                </p>

                <button
                    onclick='falar(${JSON.stringify(
                        item.texto
                    )})'
                    class="botao-oracao"
                >
                    🔊 Ouvir
                </button>

            </div>

        `).join("");

}


botaoPesquisa.addEventListener(
    "click",
    pesquisarBiblia
);


campoPesquisa.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {

            pesquisarBiblia();

        }

    }
);


// =====================================
// AVISO
// =====================================

let avisoTimeout;


function mostrarAviso(texto) {

    aviso.textContent = texto;

    aviso.classList.add("mostrar");

    clearTimeout(avisoTimeout);

    avisoTimeout =
        setTimeout(
            function() {

                aviso.classList.remove(
                    "mostrar"
                );

            },
            2500
        );

}
```
