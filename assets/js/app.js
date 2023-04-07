$(document).ready(() => {
    $('#linguagem-php').on('click', () =>{
        $('#cards').load(recuperarCard('php'));
    })
});

$(document).ready(() => {
    $('#linguagem-js').on('click', () =>{
        $('#cards').load(recuperarCard('js'));
    })
});

const visit = (local) =>{
    const endereco = local;

    if(endereco != 'nenhum'){
        window.open(endereco,'_blank');     
    }else{
        alert('App não postado na web, aguarde!');
    }
};

const pagesFile = {
    allProjects: projects
};


const recuperarCard = (linguagem) =>{
    const currentProjects = pagesFile.allProjects[linguagem];        
    const cardsCapa = document.getElementById('projetos-capa');
    const fragment = document.createDocumentFragment();

    cardsCapa.innerHTML= '';

    currentProjects.forEach(element => {
        const card = {
            img: element.img,
            title: element.title,
            content: element.content, 
            link: element.link,
            projectShow:element.projectShow
        }

        const section = document.createElement('section');
        section.className = 'card';
        section.id = 'card-js';

        const img = document.createElement('img');
        img.className = 'card-img';
        img.src = card.img;
        section.appendChild(img); 
        
        const h1 = document.createElement('h1');
        h1.className = 'card-tilte';
        h1.textContent = card.title;
        section.appendChild(h1);

        const p = document.createElement('p');
        p.className = 'card-content';
        p.textContent = card.content;
        section.appendChild(p);

        const btnLink = document.createElement('button');
        btnLink.className = 'btn-link';
        btnLink.textContent = 'Visitar';
        btnLink.addEventListener('click', () => visit(card.link));
        section.appendChild(btnLink);

        if(element.projectShow == 'sim'){
            fragment.appendChild(section);
            cardsCapa.appendChild(fragment); 
        }
    });


    const btnVerTodos = document.createElement('button');
    btnVerTodos.className = 'btn-verTodos';
    btnVerTodos.innerHTML = '<strong>Ver todos</strong>';
    btnVerTodos.addEventListener('click', () => visit(`/assets/projects/${linguagem}/index.html`));
    cardsCapa.appendChild(btnVerTodos);
}