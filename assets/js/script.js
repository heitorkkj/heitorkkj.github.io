let ola = ['Hello welcome!👋','Hola es bienvenido!👋','Olá seja bem-vindo!👋']
let count = 0

meuIntervalo = setInterval(()=>{
    apresentacao = document.getElementById('bemVindo') 
    apresentacao.innerHTML = ola[count]
    if(ola[count] === 'Olá seja bem-vindo!👋'){
        clearInterval(meuIntervalo);
    }else{
        count++
    }
}, 1500)

let curtir = () =>{
    heart = document.getElementById('heart'); 

    if(heart.className === 'bi bi-heart'){
        heart.className += '-fill'
        heart.innerHTML = '1'
    }else{
        heart.className = 'bi bi-heart'
        heart.innerHTML = ''
    }
}

let abrirMenu = () => {
    menu = document.getElementById('menu-principal')

    menu.className = menu.className == '' ? 'active' : ''    
}

$(document).ready(() => {
	
    $('#btn-sobre').on('click', () =>{
        $('#sobre').load('sobre.md')
    })

})

let email = () =>{
    areaEmail = document.getElementById('area-email')
    areaTexto = document.getElementById("email-texto")

    if(areaTexto.innerText == ''){
        areaTexto.innerText = 'heitorsan548@gmail.com'
    }else{
        areaTexto.innerText = ''
    }
}

$(document).ready(() => {
	
    $('#linguagem-php').on('click', () =>{
        $('#cards').load('/assets/pages/projetosPhp.html')
    })

})

$(document).ready(() => {
	
    $('#linguagem-js').on('click', () =>{
        $('#cards').load('/assets/pages/projetosJs.html')
    })

})

