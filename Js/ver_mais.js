var bnt_ver = document.querySelector(".bnt_area");
var escondido = document.querySelectorAll(".hidden");
var boxes_sec4 = document.querySelectorAll(".projetos_boxes_single")
var ver_mais = document.querySelector(".bnt_area p")
let area_botao = document.querySelector(".bnt_area")

console.log(bnt_ver);

bnt_ver.addEventListener("click",function(){
  
  for(var i = 0; i< boxes_sec4.length; i++){
    
    if(boxes_sec4[i].classList.contains("hidden")){
      boxes_sec4[i].classList.remove("hidden");
      boxes_sec4[i].classList.add("visible");

      ver_mais.innerHTML = "↑"
      ver_mais.style.transform =  "translateY(-4px)";
      ver_mais.style.fontSize = 35;
      area_botao.style.width = 80;

    }else if(boxes_sec4[i].classList.contains("visible")){
      boxes_sec4[i].classList.remove("visible");
      boxes_sec4[i].classList.add("hidden");

      ver_mais.innerHTML = "Ver mais!"
      ver_mais.style.transform =  "translateY(0)";
      ver_mais.style.fontSize = 24;
      area_botao.style.width = 200;
    }
  }
})
