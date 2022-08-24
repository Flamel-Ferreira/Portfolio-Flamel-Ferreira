var sobrenome = document.querySelector('.secao1-texto h1 > span');
const sobreNomeHTML = sobrenome.innerHTML;
var tamanho = 0

const flamel_bnt = document.querySelector('.secao1-texto h1')

// TUTORIAL:
//https://www.youtube.com/watch?v=a4SnD7PIM54&t=6s&ab_channel=WillDev


// Sintaxe da substring
// String.substring(inicio,tamanho)

const escrever = function(){
  sobrenome.innerHTML = sobrenome.innerHTML.replace('|','');

  sobrenome.innerHTML = sobreNomeHTML.substring(0,tamanho);

  sobrenome.innerHTML += '|';

  if(tamanho < sobreNomeHTML.length){
    tamanho++;
    setTimeout(escrever,100);
  } else {
    sobrenome.innerHTML = sobrenome.innerHTML.replace('|','');
  }
}

const apagar = function(){
  sobrenome.innerHTML = sobrenome.innerHTML.replace('|','');

  sobrenome.innerHTML = sobreNomeHTML.substring(0,tamanho);

  sobrenome.innerHTML += '|';

  if(tamanho > 0){
    tamanho--;
    setTimeout(apagar,100);
  } else {
    sobrenome.innerHTML = sobrenome.innerHTML.replace('|','');
  }

  if(tamanho==0){
    sobrenome.classList.remove('inline')
    sobrenome.classList.add('hidden');
  }
}

flamel_bnt.addEventListener('click',()=>{
  if(sobrenome.classList.contains('hidden')){
    sobrenome.classList.remove('hidden')
    sobrenome.classList.add('inline')

    if(tamanho==0){
      escrever();
    }  
  }else{
    if(tamanho==7){
      apagar();
    }
  }
})
