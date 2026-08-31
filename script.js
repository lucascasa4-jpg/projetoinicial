```javascript
const campoPesquisa = document.getElementById("campoPesquisa");
const botaoBuscar = document.getElementById("buscar");
const resultados = document.getElementById("resultados");
const botaoTema = document.getElementById("tema");
const botaoVoz = document.getElementById("voz");


// ================================
// FAZER PESQUISA
// ================================

function fazerPesquisa() {

    const termo = campoPesquisa.value.trim();

    if (termo === "") {

        resultados.innerHTML = `
            <div class="resultado-inicial">
                <div class="resultado-icone">⚠️</div>

                <h2>Digite alguma coisa</h2>

                <p>
                    Escreva o que você deseja pesquisar.
                </p>
            </div>
        `;

        return;
    }


    const pesquisaGoogle =
        "https://www.google.com/search?q=" +
        encodeURIComponent(termo);


    resultados.innerHTML = `

        <div class="resultado">

            <small>Pesquisa</small>

            <h3>🔎 ${escapar(termo)}</h3>

            <p>
                Você pesquisou por
                <strong>${escapar(termo)}</strong>.
            </p>

            <a
                href="${pesquisaGoogle}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Ver resultados na web →
            </a>

        </div>


        <div class="resultado">

            <h3>💡 Dica</h3>

            <p>
                Você pode pesquisar por notícias,
                tecnologia, esportes, filmes, músicas
                e muito mais.
            </p>

        </div>

    `;

}


// ================================
// BOTÃO PESQUISAR
// ================================

botaoBuscar.addEventListener(
    "click",
    fazerPesquisa
);


// ================================
// ENTER
// ================================

campoPesquisa.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            fazerPesquisa();
        }

    }
);


// ================================
// SUGESTÕES
// ================================

function pesquisarSugestao(termo) {

    campoPesquisa.value = termo;

    fazerPesquisa();

}


// ================================
// TEMA
// ================================

botaoTema.addEventListener(
    "click",
    function() {

        document.body.classList.toggle("escuro");

        if (
            document.body.classList.contains("escuro")
        ) {

            botaoTema.textContent = "☀️";

        } else {

            botaoTema.textContent = "🌙";

        }

    }
);


// ================================
// PESQUISA POR VOZ
// ================================

if ("webkitSpeechRecognition" in window) {

    const reconhecimento =
        new webkitSpeechRecognition();

    reconhecimento.lang = "pt-BR";

    reconhecimento.continuous = false;

    reconhecimento.interimResults = false;


    botaoVoz.addEventListener(
        "click",
        function() {

            reconhecimento.start();

        }
    );


    reconhecimento.onresult =
        function(event) {

            const texto =
                event.results[0][0].transcript;

            campoPesquisa.value = texto;

            fazerPesquisa();

        };

} else {

    botaoVoz.addEventListener(
        "click",
        function() {

            alert(
                "A pesquisa por voz não é suportada neste navegador."
            );

        }
    );

}


// ================================
// SEGURANÇA
// ================================

function escapar(texto) {

    return String(texto)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}
```
