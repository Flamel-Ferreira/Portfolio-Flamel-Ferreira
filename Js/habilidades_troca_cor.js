const habilidades_imgs_NodeList = document.querySelectorAll(".box-single img");
var hab_array = Array.from(habilidades_imgs_NodeList);
// NodeList não funciona como uma array, logo precisa transformar em array para usar o indexOf() ou findIndex().
const hab_texto = document.querySelectorAll('.box-single h2, .box-single h3');
var hab_texto_array = Array.from(hab_texto);


console.log(hab_texto)
for(let u = 0; u < hab_array.length; u++){
  hab_array[u].addEventListener("click",(t)=>{
        
    var index = hab_array.findIndex(function(element){return element === t.target})

    if(index == 0){
      if(hab_array[index].classList.contains('colorido')){
        t.target.setAttribute('src','/assets/imgs/HTML.svg');
        hab_texto_array[0].style.color = '#26979F';
        hab_texto_array[1].style.color = '#26979F';

        hab_array[index].classList.remove('colorido');

      } else{
        t.target.setAttribute('src','/assets/imgs/HTML_2.svg');
        hab_texto_array[0].style.color = '#F06529';
        hab_texto_array[1].style.color = '#F06529';

        hab_array[index].classList.add('colorido');
      }
      

    }else if(index == 1){
      if(hab_array[index].classList.contains('colorido')){
        t.target.setAttribute('src','/assets/imgs/CSS.svg');
        hab_texto_array[2].style.color = '#26979F';
        hab_texto_array[3].style.color = '#26979F';

        hab_array[index].classList.remove('colorido');
      }else{
        t.target.setAttribute('src','/assets/imgs/CSS_2.svg');
        hab_texto_array[2].style.color = '#264DE4';
        hab_texto_array[3].style.color = '#264DE4';

        hab_array[index].classList.add('colorido');
      }


    }else if(index == 2){

      if(hab_array[index].classList.contains('colorido')){
        t.target.setAttribute('src','/assets/imgs/JavaScript.svg');
        hab_texto_array[4].style.color = '#26979F';
        hab_texto_array[5].style.color = '#26979F';

        hab_array[index].classList.remove('colorido');
      }else{
        t.target.setAttribute('src','/assets/imgs/JavaScript_2.svg');
        hab_texto_array[4].style.color = '#FFC928';
        hab_texto_array[5].style.color = '#FFC928';

        hab_array[index].classList.add('colorido');
      }


    }      

  })
}

