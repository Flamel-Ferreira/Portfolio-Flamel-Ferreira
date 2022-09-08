const btnMenu = document.querySelector(".menu_responsivo_box");
const menu_itens = document.querySelector('.menu-itens');
const anc_menu = document.querySelectorAll('.menu-itens a');
const input_menu = document.querySelector('#input_menu_responsivo')

btnMenu.addEventListener('click',toggleMenu);

for( let f = 0; f < anc_menu.length; f++){
  anc_menu[f].addEventListener('click',function(){
    input_menu.checked = false;
    toggleMenu();
  })
}

function toggleMenu() {
  menu_itens.classList.toggle("menu_ativo");
}
