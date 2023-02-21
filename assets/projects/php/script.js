let voltarPag = () =>{
    window.close()
}

let irPara = (local) =>{
    let endereco = local 

    if(local == 'nenhum'){
        alert('App não postado na web, aguarde!')
    }else
        window.open(endereco,'_blank')
}


let container = document.getElementById('projetos')
container.innerHTML = ''

let quantidadeDeProjetos = todosOsProjetosPhp.length

let card = {
    img: '',
    titulo: '',
    content:'', 
    link:''
}

for(let count = 0; count<=quantidadeDeProjetos; count++){
    card.img = todosOsProjetosPhp[count].img
    card.titulo = todosOsProjetosPhp[count].titulo
    card.content = todosOsProjetosPhp[count].content
    card.link = todosOsProjetosPhp[count].link

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
        <button class="btn-link" onclick="irPara('${card.link}')">Visitar</button>
    </div>`

}