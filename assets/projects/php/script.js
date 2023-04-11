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


let card = {
    img: '',
    titulo: '',
    content:'', 
    link:''
}

projects['php'].map(element =>{
    card.img = element.img
    card.titulo = element.title
    card.content = element.content
    card.link = element.link

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
})