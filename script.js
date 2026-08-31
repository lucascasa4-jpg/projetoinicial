/* =====================================================
PALAVRA VIVA
JAVASCRIPT
===================================================== */

/* =====================================================
ELEMENTOS
===================================================== */

const themeButton = document.getElementById("themeButton");

const menuButton = document.getElementById("menuButton");

const navMenu = document.getElementById("navMenu");

const favoriteButton = document.getElementById("favoriteButton");

const favoriteIcon = document.getElementById("favoriteIcon");

const copyVerse = document.getElementById("copyVerse");

const shareVerse = document.getElementById("shareVerse");

const listenVerse = document.getElementById("listenVerse");

const listenPrayer = document.getElementById("listenPrayer");

const searchForm = document.getElementById("searchForm");

const searchInput = document.getElementById("searchInput");

const searchResult = document.getElementById("searchResult");

const toast = document.getElementById("toast");

/* =====================================================
VERSÍCULO
===================================================== */

const verseText =
document.getElementById("verseText").innerText;

const verseReference =
document.getElementById("verseReference").innerText;

/* =====================================================
MENU MOBILE
===================================================== */

menuButton.addEventListener("click", () => {

navMenu.classList.toggle("active");

});

document.querySelectorAll(".nav a").forEach(link => {


link.addEventListener("click", () => {

    navMenu.classList.remove("active");

});


});

/* =====================================================
MODO ESCURO
===================================================== */

const savedTheme =
localStorage.getItem("palavraVivaTheme");

if (savedTheme === "dark") {


document.body.classList.add("dark");

themeButton.textContent = "☀️";


}

themeButton.addEventListener("click", () => {


document.body.classList.toggle("dark");

const dark =
    document.body.classList.contains("dark");


if (dark) {

    themeButton.textContent = "☀️";

    localStorage.setItem(
        "palavraVivaTheme",
        "dark"
    );

} else {

    themeButton.textContent = "🌙";

    localStorage.setItem(
        "palavraVivaTheme",
        "light"
    );

}


});

/* =====================================================
FAVORITOS
===================================================== */

const savedFavorite =
localStorage.getItem("palavraVivaFavorite");

if (savedFavorite === "true") {


favoriteIcon.textContent = "♥";

}

favoriteButton.addEventListener("click", () => {


const isFavorite =
    favoriteIcon.textContent === "♥";


if (isFavorite) {

    favoriteIcon.textContent = "♡";

    localStorage.setItem(
        "palavraVivaFavorite",
        "false"
    );

    showToast("Removido dos favoritos");

} else {

    favoriteIcon.textContent = "♥";

    localStorage.setItem(
        "palavraVivaFavorite",
        "true"
    );

    showToast("Versículo favoritado ❤️");

}


});

/* =====================================================
COPIAR VERSÍCULO
===================================================== */

copyVerse.addEventListener("click", async () => {


const text =
    `"${verseText}"\n\n${verseReference}\n\nPalavra Viva`;


try {

    await navigator.clipboard.writeText(text);

    showToast("Versículo copiado!");

} catch {

    showToast("Não foi possível copiar.");

}


});

/* =====================================================
COMPARTILHAR
===================================================== */

shareVerse.addEventListener("click", async () => {


const text =
    `"${verseText}" — ${verseReference}`;


if (navigator.share) {

    try {

        await navigator.share({

            title: "Palavra Viva",

            text: text,

            url: window.location.href

        });

    } catch {

        // usuário cancelou

    }

} else {

    try {

        await navigator.clipboard.writeText(text);

        showToast(
            "Compartilhamento não disponível. Texto copiado!"
        );

    } catch {

        showToast("Não foi possível compartilhar.");

    }

}


});

/* =====================================================
LEITOR DE VOZ
===================================================== */

function falar(texto, button) {


if (!("speechSynthesis" in window)) {

    showToast(
        "Seu navegador não suporta leitura por voz."
    );

    return;

}


window.speechSynthesis.cancel();


const fala =
    new SpeechSynthesisUtterance(texto);


fala.lang = "pt-BR";

fala.rate = 0.9;

fala.pitch = 1;


button.classList.add("speaking");


fala.onend = () => {

    button.classList.remove("speaking");

};


window.speechSynthesis.speak(fala);


}

listenVerse.addEventListener("click", () => {


falar(
    `${verseText}. ${verseReference}`,
    listenVerse
);


});

listenPrayer.addEventListener("click", () => {

const prayer =
    document.getElementById("prayerText").innerText;

falar(prayer, listenPrayer);


});

/* =====================================================
PESQUISA
===================================================== */

const mensagens = [


{
    palavra: "fé",

    titulo: "Tenha fé",
    
    texto:
        "A fé nos ajuda a continuar caminhando mesmo quando não conseguimos enxergar o caminho."
},

{
    palavra: "amor",

    titulo: "O amor de Deus",

    texto:
        "O amor de Deus permanece presente mesmo nos momentos mais difíceis."
},

{
    palavra: "esperança",

    titulo: "Nunca perca a esperança",

    texto:
        "Mesmo diante das dificuldades, continue confiando que dias melhores virão."
},

{
    palavra: "paz",

    titulo: "Deus oferece paz",

    texto:
        "Entregue suas preocupações a Deus e permita que a paz alcance seu coração."
},

{
    palavra: "oração",

    titulo: "O poder da oração",

    texto:
        "Ore com sinceridade. Deus conhece o seu coração e ouve suas palavras."
},

{
    palavra: "deus",

    titulo: "Confie em Deus",

    texto:
        "Deus continua cuidando de você mesmo quando você não consegue compreender o que está acontecendo."
},

{
    palavra: "jesus",

    titulo: "Jesus é esperança",

    texto:
        "Em Jesus encontramos esperança, amor, perdão e uma nova oportunidade."
}


];

searchForm.addEventListener("submit", event => {


event.preventDefault();


const termo =
    searchInput.value.trim().toLowerCase();


if (!termo) {

    searchResult.innerHTML = `
        <div class="result-card">
            <strong>Digite alguma palavra.</strong>
            <p>
                Experimente pesquisar por fé, amor,
                esperança, paz ou oração.
            </p>
        </div>
    `;

    return;

}


const encontrados =
    mensagens.filter(item =>
        item.palavra.includes(termo) ||
        item.titulo.toLowerCase().includes(termo) ||
        item.texto.toLowerCase().includes(termo)
    );


if (encontrados.length === 0) {

    searchResult.innerHTML = `
        <div class="result-card">
            <strong>Nenhuma mensagem encontrada.</strong>
            <p>
                Tente outra palavra como
                "fé", "amor", "paz" ou "esperança".
            </p>
        </div>
    `;

    return;

}


searchResult.innerHTML =
    encontrados.map(item => `

        <div class="result-card">

            <strong>
                ${item.titulo}
            </strong>

            <p>
                ${item.texto}
            </p>

        </div>

    `).join("");


});

/* =====================================================
TOAST
===================================================== */

let toastTimer;

function showToast(message) {

toast.textContent = message;

toast.classList.add("show");


clearTimeout(toastTimer);


toastTimer =
    setTimeout(() => {

        toast.classList.remove("show");

    }, 2500);


}

/* =====================================================
FECHAR MENU AO CLICAR FORA
===================================================== */

document.addEventListener("click", event => {

if (
    !navMenu.contains(event.target) &&
    !menuButton.contains(event.target)
) {

    navMenu.classList.remove("active");

}


});

/* =====================================================
EFEITO DO HEADER AO ROLAR
===================================================== */

window.addEventListener("scroll", () => {


if (window.scrollY > 50) {

    document.querySelector(".header").style.boxShadow =
        "0 8px 30px rgba(0,0,0,0.08)";

} else {

    document.querySelector(".header").style.boxShadow =
        "none";

}


});
