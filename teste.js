var titulo = document.querySelector('h2');
const titulohtml = titulo.innerHTML;
var tamanho = 0;


const digitacao = function (){
  // console.log(titulo.innerHTML.substring(0,tamanho));
  titulo.innerHTML = titulo.innerHTML.replace('|','');


  titulo.innerHTML = titulohtml.substring(0,tamanho);

  
  titulo.innerHTML += '|'
  
  if(tamanho < titulohtml.length){
    tamanho++;
    setTimeout(digitacao,50);
  } else {
    titulo.innerHTML = titulo.innerHTML.replace('|','')
  }
}

const deletar = function(){
  // console.log(titulo.innerHTML.substring(0,tamanho));

  titulo.innerHTML = titulo.innerHTML.replace('|','');

  titulo.innerHTML = titulohtml.substring(0,tamanho);

  titulo.innerHTML += '|'
 
  if (tamanho > 0){
    tamanho--
    setTimeout(deletar, 200)
  } else {
    titulo.innerHTML = titulo.innerHTML.replace('|','')
  }

}

titulo.addEventListener('click',()=>{
  alert('chamando digitação')
  digitacao();
})

