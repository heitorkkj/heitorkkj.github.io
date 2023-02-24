let abrirMenu = () =>{

    let filtro = document.querySelector('#filtro')

    if(filtro.className == 'filtrar disabled')
        filtro.className = 'filtrar active'
    else
        filtro.className = 'filtrar disabled'
    
}