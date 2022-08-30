let contador = 1;
document.querySelector('#radio1').checked = true;

setInterval( function(){
  proxImagem();
},7000);

function proxImagem (){
  contador++
  if(contador>3){
    contador = 1;
  }
  
  document.querySelector('#radio'+contador).checked = true;
}

