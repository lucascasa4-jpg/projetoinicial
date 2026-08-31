/* =====================================================
PALAVRA VIVA
DESIGN MODERNO
===================================================== */

:root {

```
--background: #f8f6f1;
--surface: #ffffff;
--surface-soft: #f1ede5;

--text: #27231f;
--text-light: #756e65;

--primary: #8b5e34;
--primary-dark: #674323;
--gold: #c79a55;

--border: #e7e0d5;

--shadow: 0 20px 60px rgba(45, 34, 23, 0.10);

--radius: 22px;

--container: 1180px;
```

}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

html {
scroll-behavior: smooth;
}

body {

```
font-family: "DM Sans", sans-serif;

background: var(--background);

color: var(--text);

line-height: 1.7;

transition:
    background 0.3s ease,
    color 0.3s ease;
```

}

a {
text-decoration: none;
color: inherit;
}

button,
input {
font: inherit;
}

button {
cursor: pointer;
}

.container {

```
width: min(
    calc(100% - 40px),
    var(--container)
);

margin: auto;
```

}

/* =====================================================
HEADER
===================================================== */

.header {

```
position: fixed;

top: 0;
left: 0;

width: 100%;

z-index: 1000;

background: rgba(255,255,255,0.92);

backdrop-filter: blur(16px);

border-bottom: 1px solid rgba(0,0,0,0.05);

transition: 0.3s;
```

}

.nav-container {

```
height: 78px;

display: flex;

align-items: center;

justify-content: space-between;
```

}

.logo {

```
display: flex;

align-items: center;

gap: 12px;
```

}

.logo-icon {

```
width: 42px;
height: 42px;

display: grid;

place-items: center;

background: var(--primary);

color: white;

border-radius: 12px;

font-size: 21px;
```

}

.logo strong {

```
display: block;

font-family: "Playfair Display", serif;

font-size: 20px;
```

}

.logo small {

```
display: block;

font-size: 11px;

color: var(--text-light);

letter-spacing: 1px;
```

}

.nav {

```
display: flex;

align-items: center;

gap: 30px;
```

}

.nav a {

```
font-size: 14px;

font-weight: 600;

color: var(--text-light);

transition: 0.25s;
```

}

.nav a:hover {

```
color: var(--primary);
```

}

.nav-actions {

```
display: flex;

gap: 8px;

align-items: center;
```

}

.icon-button,
.menu-button {

```
width: 42px;
height: 42px;

border: 0;

background: var(--surface-soft);

border-radius: 50%;

display: grid;

place-items: center;

transition: 0.25s;
```

}

.icon-button:hover,
.menu-button:hover {

```
transform: translateY(-2px);
```

}

.menu-button {

```
display: none;
```

}

/* =====================================================
HERO
===================================================== */

.hero {

```
min-height: 720px;

position: relative;

display: flex;

align-items: center;

overflow: hidden;

background:

    linear-gradient(
        90deg,
        rgba(31,25,20,0.90),
        rgba(31,25,20,0.58),
        rgba(31,25,20,0.25)
    ),

    url("https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=1800&q=85")
    center / cover;
```

}

.hero-content {

```
position: relative;

z-index: 2;

padding-top: 80px;

color: white;

max-width: 720px;
```

}

.eyebrow {

```
display: inline-block;

font-size: 12px;

font-weight: 700;

letter-spacing: 2px;

margin-bottom: 20px;

color: #e8c98e;
```

}

.hero h1 {

```
font-family: "Playfair Display", serif;

font-size: clamp(48px, 7vw, 82px);

line-height: 1.05;

margin-bottom: 28px;

font-weight: 600;
```

}

.hero h1 span {

```
color: #e4bd7a;
```

}

.hero p {

```
max-width: 570px;

font-size: 18px;

color: rgba(255,255,255,0.82);

margin-bottom: 35px;
```

}

.hero-buttons {

```
display: flex;

gap: 14px;

flex-wrap: wrap;
```

}

.button {

```
display: inline-flex;

align-items: center;

justify-content: center;

gap: 8px;

padding: 14px 24px;

border-radius: 50px;

font-weight: 700;

transition: 0.3s;
```

}

.button:hover {

```
transform: translateY(-3px);
```

}

.button.primary {

```
background: white;

color: var(--primary-dark);
```

}

.button.secondary {

```
border: 1px solid rgba(255,255,255,0.45);

color: white;

background: rgba(255,255,255,0.08);

backdrop-filter: blur(10px);
```

}

.scroll-indicator {

```
position: absolute;

bottom: 25px;

left: 50%;

transform: translateX(-50%);

color: white;

opacity: 0.6;

font-size: 25px;

animation: bounce 1.8s infinite;
```

}

@keyframes bounce {

```
0%,100% {
    transform: translate(-50%,0);
}

50% {
    transform: translate(-50%,8px);
}
```

}

/* =====================================================
SECTIONS
===================================================== */

.section {

```
padding: 110px 0;
```

}

.section-heading {

```
text-align: center;

max-width: 650px;

margin: 0 auto 45px;
```

}

.section-label {

```
color: var(--primary);

font-size: 11px;

font-weight: 800;

letter-spacing: 2px;

display: block;

margin-bottom: 10px;
```

}

.section-heading h2,
.prayer-card h2,
.reflection-card h2,
.search-box h2 {

```
font-family: "Playfair Display", serif;

font-size: clamp(34px, 5vw, 48px);

line-height: 1.2;

margin-bottom: 12px;
```

}

.section-heading p,
.search-box > p {

```
color: var(--text-light);
```

}

/* =====================================================
VERSÍCULO
===================================================== */

.verse-card {

```
max-width: 920px;

margin: auto;

position: relative;

background: var(--surface);

border-radius: var(--radius);

padding: 65px 70px 30px;

box-shadow: var(--shadow);

border: 1px solid var(--border);

overflow: hidden;
```

}

.verse-decoration {

```
position: absolute;

top: 5px;
left: 30px;

font-family: Georgia, serif;

font-size: 150px;

line-height: 1;

color: #eee5d7;
```

}

.verse-content {

```
position: relative;

text-align: center;

padding: 15px;
```

}

.verse-text {

```
font-family: "Playfair Display", serif;

font-size: clamp(25px, 4vw, 38px);

line-height: 1.45;

font-style: italic;

margin-bottom: 20px;
```

}

.verse-reference {

```
color: var(--primary);

font-size: 15px;
```

}

.verse-actions {

```
display: flex;

justify-content: center;

gap: 10px;

border-top: 1px solid var(--border);

margin-top: 35px;

padding-top: 22px;
```

}

.action-button {

```
border: 0;

background: transparent;

min-width: 80px;

padding: 8px;

border-radius: 12px;

color: var(--text-light);

transition: 0.25s;
```

}

.action-button:hover {

```
background: var(--surface-soft);

color: var(--primary);

transform: translateY(-2px);
```

}

.action-button span {

```
display: block;

font-size: 20px;

margin-bottom: 3px;
```

}

.action-button small {

```
font-size: 11px;
```

}

/* =====================================================
ORAÇÃO / REFLEXÃO
===================================================== */

.prayer-section {

```
background: var(--surface-soft);
```

}

.two-column {

```
display: grid;

grid-template-columns: 1fr 1fr;

gap: 25px;
```

}

.prayer-card,
.reflection-card {

```
background: var(--surface);

border: 1px solid var(--border);

border-radius: var(--radius);

padding: 45px;

box-shadow: 0 10px 40px rgba(0,0,0,0.05);
```

}

.card-icon {

```
width: 58px;
height: 58px;

display: grid;

place-items: center;

border-radius: 17px;

background: var(--surface-soft);

font-size: 26px;

margin-bottom: 25px;
```

}

.prayer-text {

```
margin: 25px 0;

color: var(--text-light);
```

}

.prayer-text p {

```
margin-bottom: 16px;
```

}

.outline-button {

```
border: 1px solid var(--primary);

color: var(--primary);

background: transparent;

padding: 12px 20px;

border-radius: 50px;

font-weight: 700;

transition: 0.3s;
```

}

.outline-button:hover {

```
background: var(--primary);

color: white;
```

}

.reflection-card {

```
background:

    linear-gradient(
        145deg,
        #f2e7d4,
        #fffaf2
    );
```

}

.reflection-card h2 {

```
color: #563b24;

margin-bottom: 25px;
```

}

.reflection-text {

```
color: #6d5d4c;
```

}

.reflection-text p {

```
margin-bottom: 17px;
```

}

.reflection-footer {

```
margin-top: 30px;

padding-top: 20px;

border-top: 1px solid rgba(90,60,30,0.15);

display: flex;

gap: 10px;

align-items: center;

font-weight: 700;

color: var(--primary);
```

}

/* =====================================================
PESQUISA
===================================================== */

.search-section {

```
background: var(--background);
```

}

.search-box {

```
max-width: 850px;

margin: auto;

text-align: center;
```

}

.search-icon {

```
font-size: 38px;

margin-bottom: 15px;
```

}

.search-form {

```
display: flex;

margin-top: 30px;

background: var(--surface);

padding: 7px;

border: 1px solid var(--border);

border-radius: 60px;

box-shadow: 0 15px 40px rgba(0,0,0,0.06);
```

}

.search-form input {

```
flex: 1;

min-width: 0;

border: 0;

outline: 0;

background: transparent;

padding: 14px 20px;

color: var(--text);

font-size: 15px;
```

}

.search-form button {

```
border: 0;

background: var(--primary);

color: white;

padding: 0 25px;

border-radius: 50px;

font-weight: 700;
```

}

.search-result {

```
margin-top: 20px;

text-align: left;
```

}

.result-card {

```
padding: 20px;

border-radius: 15px;

background: var(--surface);

border: 1px solid var(--border);
```

}

.result-card strong {

```
color: var(--primary);
```

}

/* =====================================================
CTA
===================================================== */

.cta-section {

```
padding: 100px 0;

background: var(--primary-dark);
```

}

.cta {

```
max-width: 750px;

margin: auto;

text-align: center;

color: white;
```

}

.cta > span {

```
font-size: 42px;
```

}

.cta h2 {

```
font-family: "Playfair Display", serif;

font-size: clamp(35px,5vw,52px);

line-height: 1.2;

margin: 20px 0;
```

}

.cta p {

```
color: rgba(255,255,255,0.7);

margin-bottom: 30px;
```

}

.button.light {

```
background: white;

color: var(--primary-dark);
```

}

/* =====================================================
FOOTER
===================================================== */

.footer {

```
background: #211d19;

color: white;
```

}

.footer-content {

```
min-height: 150px;

display: flex;

align-items: center;

justify-content: space-between;

gap: 30px;
```

}

.footer-brand {

```
display: flex;

align-items: center;

gap: 15px;
```

}

.footer-logo {

```
width: 45px;
height: 45px;

display: grid;

place-items: center;

background: var(--primary);

border-radius: 12px;
```

}

.footer-brand strong {

```
font-family: "Playfair Display", serif;

font-size: 19px;
```

}

.footer-brand p {

```
color: #aaa;

font-size: 13px;
```

}

.footer-links {

```
display: flex;

gap: 25px;

color: #aaa;

font-size: 13px;
```

}

.footer-links a:hover {

```
color: white;
```

}

.footer-bottom {

```
border-top: 1px solid rgba(255,255,255,0.08);

padding: 20px;

text-align: center;

color: #888;

font-size: 12px;
```

}

/* =====================================================
TOAST
===================================================== */

.toast {

```
position: fixed;

bottom: 30px;

left: 50%;

transform: translate(-50%, 100px);

background: #24201c;

color: white;

padding: 13px 22px;

border-radius: 50px;

opacity: 0;

transition: 0.3s;

z-index: 3000;
```

}

.toast.show {

```
transform: translate(-50%, 0);

opacity: 1;
```

}

/* =====================================================
MODO ESCURO
===================================================== */

body.dark {

```
--background: #151311;

--surface: #211e1b;

--surface-soft: #292520;

--text: #f2eee8;

--text-light: #aaa39b;

--border: #37312b;
```

}

body.dark .header {

```
background: rgba(25,23,20,0.92);
```

}

body.dark .reflection-card {

```
background: linear-gradient(
    145deg,
    #30291f,
    #211e1b
);
```

}

body.dark .reflection-card h2 {

```
color: #ead8bb;
```

}

body.dark .reflection-text {

```
color: #bcb1a2;
```

}

/* =====================================================
RESPONSIVO
===================================================== */

@media (max-width: 850px) {

```
.nav {

    position: absolute;

    top: 78px;

    left: 20px;
    right: 20px;

    background: var(--surface);

    border: 1px solid var(--border);

    border-radius: 18px;

    padding: 20px;

    display: none;

    flex-direction: column;

    align-items: stretch;

    gap: 5px;

    box-shadow: var(--shadow);
}


.nav.active {

    display: flex;
}


.nav a {

    padding: 12px;

    border-radius: 10px;
}


.nav a:hover {

    background: var(--surface-soft);
}


.menu-button {

    display: grid;
}


.two-column {

    grid-template-columns: 1fr;
}


.hero {

    min-height: 650px;
}


.hero h1 {

    font-size: 52px;
}


.verse-card {

    padding: 50px 25px 25px;
}


.prayer-card,
.reflection-card {

    padding: 30px;
}


.footer-content {

    padding: 35px 0;

    flex-direction: column;

    align-items: flex-start;
}
```

}

@media (max-width: 550px) {

```
.container {

    width: min(
        calc(100% - 28px),
        var(--container)
    );
}


.nav-container {

    height: 70px;
}


.hero {

    min-height: 620px;
}


.hero-content {

    padding-top: 70px;
}


.hero h1 {

    font-size: 43px;
}


.hero p {

    font-size: 16px;
}


.button {

    width: 100%;
}


.section {

    padding: 75px 0;
}


.verse-actions {

    display: grid;

    grid-template-columns: repeat(4,1fr);

    gap: 0;
}


.action-button {

    min-width: 0;
}


.search-form {

    flex-direction: column;

    border-radius: 20px;

    gap: 7px;
}


.search-form button {

    min-height: 48px;
}


.footer-links {

    flex-wrap: wrap;

    gap: 15px;
}
```

}
