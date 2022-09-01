const habilidades_imgs_NodeList = document.querySelectorAll(".box-single img");
var hab_img_array = Array.from(habilidades_imgs_NodeList);
// NodeList não funciona como uma array, logo precisa transformar em array para usar o indexOf() ou findIndex().
const hab_texto = document.querySelectorAll('.box-single h2, .box-single h3');
var hab_texto_array = Array.from(hab_texto);
var allow = 'true';


for(let u = 0; u < hab_img_array.length; u++){
  hab_img_array[u].addEventListener("click",(t)=>{ // Evento de click nas imagens das habilidades
    
    var index = hab_img_array.findIndex(function(element){return element === t.target}) // Índice do elemento clicado
        
    if(index == 0 && allow == 'true'){ // Primeiro elemento
      if(hab_img_array[index].classList.contains('colorido')){
        reset_cor_HTML();
      }else{
        colorir_HTML();
      }
      

    }else if(index == 1 && allow == 'true'){ // Segundo elemento
      if(hab_img_array[index].classList.contains('colorido')){
        reset_cor_CSS();
      }else{
        colorir_CSS();
      }

    }else if(index == 2 && allow == 'true'){ // Terceiro elemento
      if(hab_img_array[index].classList.contains('colorido')){
        reset_cor_javascript()
      }else{
        colorir_javascript();
      }
    }      
  })
}

function reset_cor_HTML(){
  hab_img_array[0].setAttribute('src','/assets/imgs/HTML.svg');
  hab_texto_array[0].style.color = '#26979F';
  hab_texto_array[1].style.color = '#26979F';
  
  hab_img_array[0].classList.remove('colorido');
}
function colorir_HTML(){
  hab_img_array[0].setAttribute('src','/assets/imgs/HTML_2.svg');
  hab_texto_array[0].style.color = '#F06529';
  hab_texto_array[1].style.color = '#F06529';
  
  hab_img_array[0].classList.add('colorido');
}
function reset_cor_CSS(){
  hab_img_array[1].setAttribute('src','/assets/imgs/CSS.svg');
  hab_texto_array[2].style.color = '#26979F';
  hab_texto_array[3].style.color = '#26979F';
  
  hab_img_array[1].classList.remove('colorido');
}
function colorir_CSS(){
  hab_img_array[1].setAttribute('src','/assets/imgs/CSS_2.svg');
  hab_texto_array[2].style.color = '#264DE4';
  hab_texto_array[3].style.color = '#264DE4';
  
  hab_img_array[1].classList.add('colorido');
}
function reset_cor_javascript(){
  hab_img_array[2].setAttribute('src','/assets/imgs/JavaScript.svg');
  hab_texto_array[4].style.color = '#26979F';
  hab_texto_array[5].style.color = '#26979F';
  
  hab_img_array[2].classList.remove('colorido');
}
function colorir_javascript(){
  hab_img_array[2].setAttribute('src','/assets/imgs/JavaScript_2.svg');
  hab_texto_array[4].style.color = '#FFC928';
  hab_texto_array[5].style.color = '#FFC928';
  
  hab_img_array[2].classList.add('colorido');
}

function reset_all_colors(){
  reset_cor_HTML();
  reset_cor_CSS();
  reset_cor_javascript();
}