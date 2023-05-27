
$(document).ready(() => {
    $('#btn-sobre').on('click', () =>{
        $('#sobre').load('sobre.md')
    })
})

let abrirMenu = () => {
    menu = document.getElementById('navbar-menu')

    menu.className = menu.className == '' ? 'active' : ''    
}

let email = () =>{
    areaEmail = document.getElementById('area-email')
    areaTexto = document.getElementById('email-texto')

    if(areaTexto.innerText == ''){
        areaTexto.innerText = 'heitorsan548@gmail.com'
    }else{
        areaTexto.innerText = ''
    }
}

