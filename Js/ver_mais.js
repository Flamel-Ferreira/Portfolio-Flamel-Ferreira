var bnt_ver = document.querySelector(".bnt_area");
var boxes_sec4 = document.querySelectorAll(".projetos_boxes_single")
var ver_mais = document.querySelector(".bnt_area p")
let area_botao = document.querySelector(".bnt_area")

bnt_ver.addEventListener("click",function(){
  
  for(var i = 0; i < boxes_sec4.length; i++){
    
    if(boxes_sec4[i].classList.contains("hidden")){
      boxes_sec4[i].classList.remove("hidden");
      boxes_sec4[i].classList.add("visible");

      if(window.matchMedia('(max-width:766px)').matches){ //Caso tamanho de tela menor que 766px
        ver_mais.innerHTML = "↑"
        ver_mais.style.transform =  "translateY(-4px)";
        ver_mais.style.fontSize = 28;
        area_botao.style.width = 70;
      } else { 
        ver_mais.innerHTML = "↑"
        ver_mais.style.transform =  "translateY(-4px)";
        ver_mais.style.fontSize = 35;
        area_botao.style.width = 80;
      }

    }else if(boxes_sec4[i].classList.contains("visible")){
      boxes_sec4[i].classList.remove("visible");
      boxes_sec4[i].classList.add("hidden");


      if(window.matchMedia('(max-width:766px)').matches)
      {//Caso tamanho de tela menor que 766px
        ver_mais.innerHTML = "Ver mais!"
        ver_mais.style.transform =  "translateY(0)";
        ver_mais.style.fontSize = 18;
        area_botao.style.width = 125;
      } else {
        ver_mais.innerHTML = "Ver mais!"
        ver_mais.style.transform =  "translateY(0)";
        ver_mais.style.fontSize = 24;
        area_botao.style.width = 200;
      }
    }
  }
})
