let resizeWindow = () => {
  let largura = window.innerWidth;
  let altura = window.innerHeight;
  let container = document.querySelector(".container");

  if (largura < 780) {
    container.innerHTML = "";
    container.innerHTML = `<div class="responsiv"><img src="./imagens/fixing.svg"/>Simulador não disponivel para mobile!</div>`;
  }
};

let taxa = 3.18;
taxa = document.getElementById("taxa").innerHTML = taxa.toFixed(2);

let popSaudavel = (total, taxa) =>{

    var contam = 1000000*taxa; 
    total = total - contam;
    if(total <= 0){
        total = 0
        return total
    }else{
        return total;
    }
    
}

let enableMascara = () =>{
    if(taxa>=3){
    taxa -= 1
    }
}

let enableDistanciamento = () =>{
    if(taxa>=2){
        taxa -= 0.7
    }
}

let enableHigene = () =>{
    if(taxa>=1){
        taxa -= 0.3
    }
}