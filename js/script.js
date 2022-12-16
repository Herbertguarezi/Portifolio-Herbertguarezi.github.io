//muda de dark para light mode e muda os icones de modo
const html = document.querySelector("html");
const btn_modos = document.getElementById("modos");

function troca_icone() {
  if (html.classList.contains("light-mode")) {
    btn_modos.removeAttribute("class");
    btn_modos.classList.add("fa-regular");
    btn_modos.classList.add("fa-moon");
  } else {
    btn_modos.removeAttribute("class");
    btn_modos.classList.add("fa-regular");
    btn_modos.classList.add("fa-sun");
  }
}

function troca_modo() {
  html.classList.toggle("light-mode");
  troca_icone();
}
btn_modos.addEventListener("click", troca_modo);

//mudar o logo de acordo com o tamanho

const logo = document.querySelector(".logo");

window.onresize = function () {
  var desktop = document.querySelectorAll;
  var tamanho_tela = window.innerWidth;
  if (tamanho_tela <= 800) {
    logo.classList.add("desktop");
  } else {
    logo.classList.remove("desktop");
  }
};
