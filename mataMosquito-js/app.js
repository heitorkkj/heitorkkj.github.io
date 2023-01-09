let largura = 0;
let altura = 0;
let vidas = 1;
let tempo = 15;
let mosquitoTempo = 1500;

let nivel = window.location.search; 
nivel = nivel.replace('?','');
nivel = nivel.trim();
if(nivel === 'normal'){
    mosquitoTempo = 1500;
}else if(nivel === 'dificil'){
    mosquitoTempo = 1000;
}else if(nivel === 'chucknorris'){
    mosquitoTempo = 700;
}

function ajustaTamanho(){
    largura = window.innerWidth; 
    altura = window.innerHeight;
    
    console.log(largura, altura);
}

ajustaTamanho();

let cronometro = setInterval(function(){
    tempo-=1;

    if(tempo < 0){
        clearInterval(cronometro);
        clearInterval(criarMosquito);
        window.location.href = 'vitoria.html';
    }else{
        document.getElementById('cronometro').innerHTML = tempo;
    }
},1000);

function posicaoRandomica(){
    
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();

        if(vidas > 3){
            window.location.href = 'fim_de_jogo.html';
        }else{
            document.getElementById('v-' + vidas).src = "img/coracao_vazio.png"
            vidas++;
        }

    }

    let posicaoX = Math.floor(Math.random() * largura) - 90; 
    let posicaoY = Math.floor(Math.random() * altura) - 90; 

    posicaoX = posicaoX < 0 ? 0 : posicaoX;
    posicaoY = posicaoY < 0 ? 0 : posicaoY;

    //elemento html de forma programatica
    let mosquito = document.createElement('img');
    mosquito.src = 'img/mosca.png'
    mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio();
    mosquito.style.left = posicaoX + 'px';
    mosquito.style.top = posicaoY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }


    document.body.appendChild(mosquito);
}

function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3);
    if(classe === 0){
        return 'mosquito-1'
    }else if(classe === 1){
        return 'mosquito-2'
    }else{
        return 'mosquito-3'
    }
}

function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2);
    if(classe === 0){
        return 'lado-a'
    }else{
        return 'lado-b'
    }
}


document.getElementById('cronometro').innerHTML = tempo;
let criarMosquito = setInterval(function(){
    posicaoRandomica()
},mosquitoTempo)



