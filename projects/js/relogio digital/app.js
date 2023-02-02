
let clock = document.getElementById('clock');
let primeiraMetadeRelogio = document.getElementById('primeira-metade')
let segundaMetadeRelogio = document.getElementById('segunda-metade')

primeiraMetadeRelogio.style.height = '0%'
segundaMetadeRelogio.style.height = '0%'

setInterval(function(){
    let date = new Date()
    let hora = date.getHours()
    let minutos = date.getMinutes()
    let segundos = date.getSeconds()

    if(minutos < 10){
        minutos = `0${minutos}`
    }
     
    if( hora>=0 && hora<=6 || hora>=12 && hora<=18){
        let contador = 0
        let i = 0 
        let porcentMinutos = (minutos*10)/6
        porcentMinutos = Math.round(porcentMinutos)

        if(hora>=0 && hora<=6){
            i = 0 
            for(i; i<hora;i++){
                contador++
            }

            porcentMinutos = `${contador}.${porcentMinutos}`
            porcentMinutos = Number(porcentMinutos)

            primeiraMetadeRelogio.style.height = `${16.6*porcentMinutos}%`

        }else{
            i = 12
            for(i; i<hora;i++){
                contador++
            }

            porcentMinutos = `${contador}.${porcentMinutos}`
            porcentMinutos = Number(porcentMinutos)

            primeiraMetadeRelogio.style.height = `${16.6*porcentMinutos}%`
        }
    }else{
        let contador = 0
        let i = 0 
        let porcentMinutos = (minutos*10)/6
        porcentMinutos = Math.round(porcentMinutos)

        if(hora>=6 && hora<=12){
            i = 0 
            for(i; i<hora;i++){
                contador++
            }

            porcentMinutos = `${contador}.${porcentMinutos}`
            porcentMinutos = Number(porcentMinutos)

            segundaMetadeRelogio.style.height = `${16.6*porcentMinutos}%`

        }else{
            i = 18
            for(i; i<hora;i++){
                contador++
            }

            porcentMinutos = `${contador}.${porcentMinutos}`
            porcentMinutos = Number(porcentMinutos)

            segundaMetadeRelogio.style.height = `${16.6*porcentMinutos}%`
        }
    }

    console.log(minutos)


    clock.innerHTML =  `${hora}<hr/>${minutos}`;
}, 1000)


    