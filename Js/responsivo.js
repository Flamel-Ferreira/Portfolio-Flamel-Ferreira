// window.matchMedia(string)  →  É um objeto do tipo MediaQueryList representando o resultado analisado da string media query especificada.
// .matches → Irá testa o .matchMedia(string) retornando um true se for cumprida e false se não 
document.addEventListener('DOMContentLoaded', auto_hidden); // Chama quando inicia
window.addEventListener('resize', auto_hidden); // Chama quando da resize
// Essa função não é muito perfomática pois chama várias vezes quando está arrastando a tela para dar resize


function auto_hidden(){

  if(window.matchMedia('(min-width: 1150px)').matches){
    reset_hidden();
    for(let a = 3; a < boxes_sec4.length; a++){
      boxes_sec4[a].classList.add('hidden');
      // Deixar apenas 3 paineis quando maior que 1150px
    }
  }

  if(window.matchMedia('(max-width: 1150px)').matches){
    reset_hidden();
    for(let b = 2; b < boxes_sec4.length; b++){
      boxes_sec4[b].classList.add('hidden');
    }// Deixar apenas dois paineis quando entre 766px e 1150px
  }


  if(window.matchMedia('(max-width:766px)').matches){
    reset_hidden();
    for(let c = 1; c < boxes_sec4.length; c++){
      boxes_sec4[c].classList.add('hidden');
    } // Deixar apenas dois paineis quando menor 766px  
  }
}


function reset_hidden(){
  for( let z = 0; z < boxes_sec4.length;z++){
    boxes_sec4[z].classList.remove('hidden');
    boxes_sec4[z].classList.remove('visible');
  } // remove a classe 'hidden' de todos os boxes
}