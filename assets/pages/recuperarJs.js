
let areaDeProjetos = document.getElementById('projetos-capa')


let quantidadeDeProjetos = todosOsProjetos.length

let card = {
    img: '',
    titulo: '',
    content:'', 
    link:''

}

for(let count = 0; count<=quantidadeDeProjetos; count++){

    if(todosOsProjetos[count].projetoCapa == 'sim'){
    card.img = todosOsProjetos[count].img
    card.titulo = todosOsProjetos[count].titulo
    card.content = todosOsProjetos[count].content
    card.link = todosOsProjetos[count].link

    areaDeProjetos.innerHTML += ` 
    <section class="card" id="card-js">
        <img class="card-img" src="${card.img}"/>

        <h1 class="card-title">${card.titulo}</h1>
        <p class="card-content">${card.content}</p> 

        <button class="btn-link" onclick="irPara('${card.link}')" >Visitar
        </button>
    </section>`
    }

}

