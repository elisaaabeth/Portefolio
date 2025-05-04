var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (var tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (var tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// animation
const typed = new Typed(".multiple", {
  strings: ["Bonjour, je suis Elisabeth^10"],
  typeSpeed: 50,
  startSpeed: 10,
  backDelay: 10,
});

// block projet
const projetScolaire = document.getElementById("Projet-scolaire");
const projetPersonnel = document.getElementById("Projet-personnel");
const contenuScolaire = document.getElementById("ProjetScolaire");
const contenuPersonnel = document.getElementById("ProjetPersonnel");

projetScolaire.addEventListener("click", function () {
  // Active le lien
  projetScolaire.classList.add("active-link");
  projetPersonnel.classList.remove("active-link");

  // Affiche le bon contenu
  contenuScolaire.classList.add("active-tab-projet");
  contenuPersonnel.classList.remove("active-tab-projet");
});

projetPersonnel.addEventListener("click", function () {
  // Active le lien
  projetPersonnel.classList.add("active-link");
  projetScolaire.classList.remove("active-link");

  // Affiche le bon contenu
  contenuPersonnel.classList.add("active-tab-projet");
  contenuScolaire.classList.remove("active-tab-projet");
});

// menu burguer

const icone = document.querySelector(".navbar-mobile i");
const modal = document.querySelector(".modal");
const id = document.getElementById("id");
console.log(icone, "ok");
console.log(modal, "ok");

icone.addEventListener("click", function () {
  console.log(icone, "ok");
  modal.classList.toggle("change");
  icone.classList.toggle("bx-x");
});
console.log("ok");
