let container = document.getElementById('projetos')
container.innerHTML = ''

let todosOsProjetos = [
        {
            img: '/assets/img/app-orcamento-pessoal.png',
            titulo: 'App Orçamento Pessoal',
            content:'  Aplicação para controle de gastos e orçamentos pessoais.', 
            link:'/assets/projects/js/App_Orçamento_pessoal/index.html'
        },
        {
            img: '/assets/img/calculadora.png',
            titulo: 'Calculadora',
            content:'Calculadora básica.', 
            link:'/assets/projects/js/appCalculadora/index.html'
        },
        {
            img: '/assets/img/simulador-de-pandemia.png',
            titulo: 'Simulador de Pandemia',
            content:'Simulador de contaminação da pandemia de Covid-19.', 
            link:'/assets/projects/js/trabalhoFeira/index.html'
        },
        {
            img: '/assets/img/game-mata-mosquito.png',
            titulo: 'Game Mata Mosquito',
            content:'Jogo Mata Mosquito.', 
            link:'/assets/projects/js/mataMosquito-js/index.html'
        },
        {
            img: '/assets/img/urna-eletronica.png',
            titulo: 'Urna Eletronica',
            content:'Simulador da Urna Eletronica - 1º turno eleições municipais.', 
            link:'/assets/projects/js/urna-js/index.html'
        },
        {
            img: '/assets/img/relogio-digital.png',
            titulo: 'Relogio digital',
            content:'Relogio Digital de acordo com o horario oficial brasileiro.', 
            link:'/assets/projects/js/relogio digital/index (2).html'
        },
]

let card = {
    img: '',
    titulo: '',
    content:'', 
    link:''
}

let quantProjetos = todosOsProjetos.length

for(let count = 0; count<=quantProjetos; count++){
    card.img = todosOsProjetos[count].img
    card.titulo = todosOsProjetos[count].titulo
    card.content = todosOsProjetos[count].content
    card.link = todosOsProjetos[count].link

    container.innerHTML += ` 
    <div class="card" id="card-js">
        <div class="card-img">
            <img src="${card.img}"/>
        </div>
        <h1 class="card-title"> 
        ${card.titulo}
        </h1>
        <div class="card-content">
        ${card.content}
        </div> 
        <button class="btn-link"><a href="${card.link}" target="_blank">Visitar</a>
        </button>

    </div>`

}