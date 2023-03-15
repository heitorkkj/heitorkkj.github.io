let coracao = document.getElementById('coracao')
let alturaCoracao = coracao.clientHeight - 80
let larguraCoracao = coracao.clientWidth - 80


let moverBotao = () => {
    if(document.getElementById('btnNao')){
        document.getElementById('btnNao').remove();
    }

    let posicaoX = Math.floor(Math.random() * larguraCoracao) 
    let posicaoY = Math.floor(Math.random() * alturaCoracao) 
    
    posicaoX = posicaoX >= 200 ? - 30  : posicaoX
    posicaoY = posicaoY >= 200 ? - 30  : posicaoY

    let botao = document.createElement('button')
    botao.addEventListener('click', moverBotao)
    botao.innerHTML = 'Não'
    botao.style.top = posicaoX + 'px'
    botao.style.left = posicaoY + 'px'
    botao.style.position = 'absolute'
    botao.className = 'botao'
    botao.id = 'btnNao'

    coracao.appendChild(botao)
}

let botaoSim = () =>{
    let areaTexto = document.getElementById('text')
    let botao = document.getElementById('btnNao')
    botao.style.display = 'none'
    
    areaTexto.innerHTML = 'Você já faz parte disso bobinha🥰'
}