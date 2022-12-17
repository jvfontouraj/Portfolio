"use strict";

// Na seção de projetos, botar uma seta para a direita para mostrar mais dois projetos, um concluído e outro escrito "em breve", colocando uma seta no lado esquerdo para voltar para os outros dois projetos iniciais
// Ainda nessa seção, tirar print da página inteira e mostrar apenas o "hero", podendo escrolar para baixo e para cima dentro daquele espaço, sem ocupar mais espaço da página

// SHOW AND HIDDE SKILLS TEXT

let standardText = document.querySelector(".skills-standard");

// Javascript
let jsText = document.querySelector(".skills-javascript");
let jsLogo = document.querySelector(".js-logo");
jsLogo.addEventListener("mouseover", () => {
  jsText.classList.remove("hidden");
  standardText.classList.add("hidden");
});
jsLogo.addEventListener("mouseout", () => {
  jsText.classList.add("hidden");
  standardText.classList.remove("hidden");
});

// Html
let htmlText = document.querySelector(".skills-html");
let htmlLogo = document.querySelector(".html-logo");
htmlLogo.addEventListener("mouseover", () => {
  htmlText.classList.remove("hidden");
  standardText.classList.add("hidden");
});
htmlLogo.addEventListener("mouseout", () => {
  htmlText.classList.add("hidden");
  standardText.classList.remove("hidden");
});

// Css
let cssText = document.querySelector(".skills-css");
let cssLogo = document.querySelector(".css-logo");
cssLogo.addEventListener("mouseover", () => {
  cssText.classList.remove("hidden");
  standardText.classList.add("hidden");
});
cssLogo.addEventListener("mouseout", () => {
  cssText.classList.add("hidden");
  standardText.classList.remove("hidden");
});

// Github
let githubText = document.querySelector(".skills-github");
let githubLogo = document.querySelector(".github-logo");
githubLogo.addEventListener("mouseover", () => {
  githubText.classList.remove("hidden");
  standardText.classList.add("hidden");
});
githubLogo.addEventListener("mouseout", () => {
  githubText.classList.add("hidden");
  standardText.classList.remove("hidden");
});

// Git
let gitText = document.querySelector(".skills-git");
let gitLogo = document.querySelector(".git-logo");
gitLogo.addEventListener("mouseover", () => {
  gitText.classList.remove("hidden");
  standardText.classList.add("hidden");
});

gitLogo.addEventListener("mouseout", () => {
  gitText.classList.add("hidden");
  standardText.classList.remove("hidden");
});

// Plus
let plusText = document.querySelector(".skills-plus");
let plusLogo = document.querySelector(".plus");
plusLogo.addEventListener("mouseover", () => {
  plusText.classList.remove("hidden");
  standardText.classList.add("hidden");
});
plusLogo.addEventListener("mouseout", () => {
  plusText.classList.add("hidden");
  standardText.classList.remove("hidden");
});

/////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    // e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

/////////////////////////////
// STICKY NAVIGATION

const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);

/////////////////////////////
//MOBILE NAVIGATION

const btnNavEl = document.querySelector(".btn-menu");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
