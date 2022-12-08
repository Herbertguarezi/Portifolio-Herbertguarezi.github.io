const html = document.querySelector('html');
const btn_modos = document.getElementById('modos');

function troca_modo(){
  html.classList.toggle('light-mode')
}

console.log('Bem vindo')

btn_modos.addEventListener('click', troca_modo);

