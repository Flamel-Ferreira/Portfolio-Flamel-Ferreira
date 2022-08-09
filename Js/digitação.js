var spanSobrenome = document.querySelector('.secao1-texto h1 > span');
var sobreNome = spanSobrenome.innerHTML;
var indexCaract = 0

const flamel_bnt = document.querySelector('.secao1-texto h1')

// TUTORIAL:
//https://www.youtube.com/watch?v=a4SnD7PIM54&t=6s&ab_channel=WillDev


// Sintaxe da substring
// String.substring(inicio,tamanho)

var ind = 1;

const escrever2 = function(){
  sobreNome = sobreNome.replace('|','')

  sobreNome.substring(1,ind);

  sobreNome += '|';

  if(ind < sobreNome.length){  
    console.log(ind)
    ind++
    setTimeout(escrever2, 1000)
  }
}


{
const escrever = function (){
  spanSobrenome.innerHTML = spanSobrenome.innerHTML.replace('|','')

  if (sobreNome.length > indexCaract ){
    if(indexCaract == 0){
      spanSobrenome.innerHTML = sobreNome.charAt(indexCaract);
    }else{
      spanSobrenome.innerHTML += sobreNome.charAt(indexCaract);
    }

    spanSobrenome.innerHTML += '|'

    indexCaract++
    setTimeout(escrever, 50)
  }

  alert(indexCaract);
}



const apagar = function(){
  spanSobrenome.innerHTML = spanSobrenome.innerHTML.replace('|','')

  indexCaract--
 
  if (sobreNome.length > indexCaract ){
    if(indexCaract == 0){
      spanSobrenome.innerHTML = sobreNome.charAt(indexCaract);
    }else{
      spanSobrenome.innerHTML -= sobreNome.charAt(indexCaract);
    }

    spanSobrenome.innerHTML += '|'

    if (indexCaract == 0){
      return
    }
    setTimeout(apagar, 1000)

  } 
  console.log(indexCaract)
}

flamel_bnt.addEventListener('click',()=>{
  if(spanSobrenome.style.display == 'inline'){
    alert('chamando apagar')
    apagar();
    // spanSobrenome.style.display = 'none'
  }else{
    alert('Chamando escrever')
    spanSobrenome.style.display = 'inline'
    escrever2();
  }
})
}