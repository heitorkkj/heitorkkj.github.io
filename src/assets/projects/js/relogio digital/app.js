
let clock = document.getElementById('clock')
let primeiraMetadeRelogio = document.getElementById('primeira-metade')
let segundaMetadeRelogio = document.getElementById('segunda-metade')

primeiraMetadeRelogio.style.height = '0%'
segundaMetadeRelogio.style.height = '0%'

setInterval(function(){
    let date = new Date()
    let hora = date.getHours()
    let minutos = date.getMinutes()
    let segundos = date.getSeconds()
    let controleSegundos = 0

    if(minutos < 10){
        minutos = `0${minutos}`
    }

    if(segundos > 0 && segundos <= 30){
        segundaMetadeRelogio.style.height = '0%'
        primeiraMetadeRelogio.style.height = `${3.3*segundos}%`
    }else if(segundos >= 30 && segundos < 60){
        primeiraMetadeRelogio.style.height = '100%'

        segundaMetadeRelogio.style.height = `${3.45*(segundos - 30)}%`
    }else{ 
        segundaMetadeRelogio.style.height = '0%'
        primeiraMetadeRelogio.style.height = '0%'
    }



    clock.innerHTML =  `
        ${hora} <br/>
        <hr/> 
        ${minutos} <br/>
    `;

}, 1000)

