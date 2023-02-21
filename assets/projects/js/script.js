let voltarPag = () =>{
    window.close()
}

let irPara = (local) =>{
    let endereco = local 

    window.open(endereco,'_blank')
}

let container = document.getElementById('projetos')
container.innerHTML = ''

let quantidadeDeProjetos = todosOsProjetos.length

let card = {
    img: '',
    titulo: '',
    content:'', 
    link:''
}

for(let count = 0; count<=quantidadeDeProjetos; count++){
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
        <button class="btn-link" onclick="irPara('${card.link}')">Visitar
        </button>
    </div>`

}
