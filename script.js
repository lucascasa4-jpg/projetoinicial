const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const filters = document.querySelectorAll(".filter");
const newsCards = document.querySelectorAll(".news-card");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const emptyState = document.getElementById("emptyState");

// DATA AUTOMÁTICA
document.getElementById("today").textContent =
  new Intl.DateTimeFormat("pt-BR", {
    weekday: "short",
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(new Date()).toUpperCase();

document.getElementById("year").textContent =
  new Date().getFullYear();

// MENU PARA CELULAR
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");

  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

// FECHAR MENU AO CLICAR
mainNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// FILTROS DAS NOTÍCIAS
let activeCategory = "Todos";

function filterNews() {
  const term = searchInput.value
    .trim()
    .toLocaleLowerCase("pt-BR");

  let visible = 0;

  newsCards.forEach(card => {
    const categoryMatch =
      activeCategory === "Todos" ||
      card.dataset.category === activeCategory;

    const searchable = (
      card.dataset.search + " " + card.innerText
    ).toLocaleLowerCase("pt-BR");

    const textMatch = !term || searchable.includes(term);

    const show = categoryMatch && textMatch;

    card.hidden = !show;

    if (show) {
      visible++;
    }
  });

  emptyState.hidden = visible !== 0;
}

// CLIQUE NOS FILTROS
filters.forEach(button => {
  button.addEventListener("click", () => {
    filters.forEach(item => {
      item.classList.remove("active");
    });

    button.classList.add("active");

    activeCategory = button.dataset.filter;

    filterNews();
  });
});

// PESQUISA
searchButton.addEventListener("click", filterNews);

searchInput.addEventListener("input", filterNews);

searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    filterNews();
  }
});

// LINKS DAS MODALIDADES
document.querySelectorAll("[data-filter-link]").forEach(link => {
  link.addEventListener("click", () => {
    const category = link.dataset.filterLink;

    activeCategory = category;

    filters.forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.filter === category
      );
    });

    filterNews();
  });
});

// LINK DE FUTEBOL NO MENU
document.querySelectorAll("[data-category-link]").forEach(link => {
  link.addEventListener("click", () => {
    const category = link.dataset.categoryLink;

    activeCategory = category;

    filters.forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.filter === category
      );
    });

    filterNews();
  });
});
