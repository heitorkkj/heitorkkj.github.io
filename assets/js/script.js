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
        $('#cards').load(recuperarCard('php'))
    })

})

$(document).ready(() => {
	
    $('#linguagem-js').on('click', () =>{
        $('#cards').load(recuperarCard('js'))
    })

})

let irPara = (local) =>{
    let endereco = local 

    window.open(endereco,'_blank')
}

let recuperarCard = (linguagem) =>{

    let areaDeProjetos = document.getElementById('cards')
    areaDeProjetos.innerHTML = ''
    areaDeProjetos.innerHTML = `   
    <section class="cards" id="projetos-capa"> 
        <button onclick="irPara('/assets/projects/${linguagem}/index.html')"class="btn-verTodos">
            <strong>Ver todos</strong>
        </button>
    </section>`

    let cardsCapa = document.getElementById('projetos-capa')

    let card = {
        img: '',
        titulo: '',
        content:'', 
        link:''
    }

    if(linguagem == 'js'){    
        let quantidadeDeProjetos = todosOsProjetos.length

        for(let count = 0; count<=quantidadeDeProjetos; count++){
            

            if(todosOsProjetos[count].projetoCapa == 'sim'){

            card.img = todosOsProjetos[count].img
            card.titulo = todosOsProjetos[count].titulo
            card.content = todosOsProjetos[count].content
            card.link = todosOsProjetos[count].link

            cardsCapa.insertAdjacentHTML('afterbegin', (` 
            <section class="card" id="card-js">
                <img class="card-img" src="${card.img}"/>

                <h1 class="card-title">${card.titulo}</h1>
                <p class="card-content">${card.content}</p> 

                <button class="btn-link" onclick="irPara('${card.link}')" >Visitar
                </button>
            </section>`))
            }
        }

    }else{
        let quantidadeDeProjetos = todosOsProjetosPhp.length

        for(let count = 0; count<=quantidadeDeProjetos; count++){

            if(todosOsProjetosPhp[count].projetoCapa == 'sim'){

            card.img = todosOsProjetosPhp[count].img
            card.titulo = todosOsProjetosPhp[count].titulo
            card.content = todosOsProjetosPhp[count].content
            card.link = todosOsProjetosPhp[count].link

            cardsCapa.insertAdjacentHTML('afterbegin', (` 
            <section class="card" id="card-php">
                <img class="card-img" src="${card.img}"/>

                <h1 class="card-title">${card.titulo}</h1>
                <p class="card-content">${card.content}</p> 

                <button class="btn-link" onclick="irPara('${card.link}')" >Visitar
                </button>
            </section>`))
            }
        }
    }

}