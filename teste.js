var titulo = document.querySelector('h2');
const titulohtml = titulo.innerHTML;
var tam = 0;


const digitacao = function (){
  // console.log(titulo.innerHTML.substring(0,tam));
  titulo.innerHTML = titulo.innerHTML.replace('|','');


  titulo.innerHTML = titulohtml.substring(0,tam);

  
  titulo.innerHTML += '|'
  
  if(tam < titulohtml.length){
    tam++;
    setTimeout(digitacao,50);
  } else {
    titulo.innerHTML = titulo.innerHTML.replace('|','')
  }
}

const deletar = function(){
  // console.log(titulo.innerHTML.substring(0,tam));

  titulo.innerHTML = titulo.innerHTML.replace('|','');

  titulo.innerHTML = titulohtml.substring(0,tam);

  titulo.innerHTML += '|'
 
  if (tam > 0){
    tam--
    setTimeout(deletar, 200)
  } else {
    titulo.innerHTML = titulo.innerHTML.replace('|','')
  }

}

titulo.addEventListener('click',()=>{
  alert('chamando digitação')
  digitacao();
})

