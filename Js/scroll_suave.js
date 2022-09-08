const alt_inicio = document.querySelector('#inicio').getBoundingClientRect().top
const alt_sobre_mim = document.querySelector('#sobre_mim').getBoundingClientRect().top
const alt_habilidades = document.querySelector('#habilidades').getBoundingClientRect().top
const alt_projetos =  document.querySelector('#projetos').getBoundingClientRect().top

const anc_menu_Array = Array.from(anc_menu);

for( let f = 0; f < anc_menu.length; f++){
  anc_menu[f].addEventListener('click',(t)=>{
    var index_menu = anc_menu_Array.findIndex(function(element){return element === t.target})

    if(index_menu == 0){
      window.scrollTo({
        top: alt_inicio - 100,
        behavior: "smooth"
      })
    } 
    else if(index_menu == 1){
      window.scrollTo({
        top: alt_sobre_mim - 100,
        behavior: "smooth"
      })
    }
    else if(index_menu == 2){
      window.scrollTo({
        top: alt_habilidades - 100,
        behavior: "smooth"
      })
    }
    else if(index_menu == 3){
      window.scrollTo({
        top: alt_projetos - 100,
        behavior: "smooth"
      })
    }
  })
}
