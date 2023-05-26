let resizeWindow = () => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  let main = document.querySelector("#main");

  if (width < 780) {
    main.innerHTML = "";
    main.innerHTML = `<div class="responsiv"><img src="./assets/images/fixing.svg"/>Simulador não disponivel para mobile!</div>`;
  }
};

let rate = 3.18;
let spanRate = document.getElementById("taxa")
spanRate.innerHTML = rate.toFixed(2);

let popSaudavel = (total, rate) =>{

    var contam = 1000000*rate; 
    total = total - contam;
    
    if(total <= 0){
        total = 0
        return total
    }else{
        return total;
    }
    
}

let enableAction = (type) =>{

    if(type == 'mascara'){
        if(rate>=3){
            rate -= 1
        }
    }else if(type == 'distanciamento'){
        if(rate>=2){
            rate -= 0.7
        }
    }else{
        if(rate>=1.19){
            rate -= 0.3
        }
    }

    spanRate.innerHTML = rate.toFixed(2)
}
