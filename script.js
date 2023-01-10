"use strict";

// Na seção de projetos, botar uma seta para a direita para mostrar mais dois projetos, um concluído e outro escrito "em breve", colocando uma seta no lado esquerdo para voltar para os outros dois projetos iniciais
// Ainda nessa seção, tirar print da página inteira e mostrar apenas o "hero", podendo escrolar para baixo e para cima dentro daquele espaço, sem ocupar mais espaço da página

// SHOW AND HIDDE SKILLS TEXT

let standardText = document.querySelector(".skills-standard");

// Javascript
let jsDiv = document.querySelector(".js-div");
let jsText = document.querySelector(".skills-javascript");
let jsLogo = document.querySelector(".js-logo");
let jsHeader = document.querySelector(".header-js");
jsLogo.addEventListener("mouseover", () => {
  jsText.classList.remove("hidden");
  jsHeader.classList.remove("hidden");
  jsDiv.classList.remove("hidden");
  standardText.classList.add("hidden");
});
jsLogo.addEventListener("mouseout", () => {
  jsText.classList.add("hidden");
  jsHeader.classList.add("hidden");
  jsDiv.classList.add("hidden");
  standardText.classList.remove("hidden");
});

// Html
let htmlDiv = document.querySelector(".html-div");
let htmlText = document.querySelector(".skills-html");
let htmlLogo = document.querySelector(".html-logo");
let htmlHeader = document.querySelector(".header-html");

htmlLogo.addEventListener("mouseover", () => {
  htmlText.classList.remove("hidden");
  htmlHeader.classList.remove("hidden");
  htmlDiv.classList.remove("hidden");
  standardText.classList.add("hidden");
});
htmlLogo.addEventListener("mouseout", () => {
  htmlText.classList.add("hidden");
  htmlHeader.classList.add("hidden");
  htmlDiv.classList.add("hidden");
  standardText.classList.remove("hidden");
});

// Css
let cssDiv = document.querySelector(".css-div");
let cssText = document.querySelector(".skills-css");
let cssLogo = document.querySelector(".css-logo");
let cssHeader = document.querySelector(".header-css");
cssLogo.addEventListener("mouseover", () => {
  cssText.classList.remove("hidden");
  cssHeader.classList.remove("hidden");
  cssDiv.classList.remove("hidden");
  standardText.classList.add("hidden");
});
cssLogo.addEventListener("mouseout", () => {
  cssText.classList.add("hidden");
  cssHeader.classList.add("hidden");
  cssDiv.classList.add("hidden");
  standardText.classList.remove("hidden");
});

// Node
let nodeDiv = document.querySelector(".node-div");
let nodeText = document.querySelector(".skills-node");
let nodeLogo = document.querySelector(".node-logo");
let nodeHeader = document.querySelector(".header-node");
nodeLogo.addEventListener("mouseover", () => {
  nodeText.classList.remove("hidden");
  nodeHeader.classList.remove("hidden");
  nodeDiv.classList.remove("hidden");
  standardText.classList.add("hidden");
});
nodeLogo.addEventListener("mouseout", () => {
  nodeText.classList.add("hidden");
  nodeHeader.classList.add("hidden");
  nodeDiv.classList.add("hidden");
  standardText.classList.remove("hidden");
});

// DotNet
let dotnetDiv = document.querySelector(".dotnet-div");
let dotnetText = document.querySelector(".skills-dotnet");
let dotnetLogo = document.querySelector(".dotnet-logo");
let dotnetHeader = document.querySelector(".header-dotnet");
dotnetLogo.addEventListener("mouseover", () => {
  dotnetText.classList.remove("hidden");
  dotnetHeader.classList.remove("hidden");
  dotnetDiv.classList.remove("hidden");
  standardText.classList.add("hidden");
});

dotnetLogo.addEventListener("mouseout", () => {
  dotnetText.classList.add("hidden");
  dotnetHeader.classList.add("hidden");
  dotnetDiv.classList.add("hidden");
  standardText.classList.remove("hidden");
});

// Plus
let plusDiv = document.querySelector(".plus-div");
let plusText = document.querySelector(".skills-plus");
let plusLogo = document.querySelector(".plus");
let plusHeader = document.querySelector(".plus-header");
plusLogo.addEventListener("mouseover", () => {
  plusText.classList.remove("hidden");
  plusHeader.classList.remove("hidden");
  plusDiv.classList.remove("hidden");
  standardText.classList.add("hidden");
});
plusLogo.addEventListener("mouseout", () => {
  plusText.classList.add("hidden");
  plusHeader.classList.add("hidden");
  plusDiv.classList.add("hidden");
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
const gitHeroEl = document.querySelector(".git-hero");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  gitHeroEl.classList.toggle("git-hidde");
});
