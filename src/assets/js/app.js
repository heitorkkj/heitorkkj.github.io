$(document).ready(() => {
    $('#linguagem-js').on('click', () =>{
        $('#cards').html('<section class="cards" id="projetos-capa">');
        $('#cards').load(recuperarCard('js'));
    })

    $('#linguagem-php').on('click', () =>{
        $('#cards').html('<section class="cards" id="projetos-capa">');
        $('#cards').load(recuperarCard('php'));
    })


    $('#home-header').load('/src/assets/components/home/navbar.html');
    $('#home-about').load('/src/assets/components/home/articleAbout.html');
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
        img.loading = 'lazy';
        section.appendChild(img);

        const h1 = document.createElement('h1');
        h1.className = 'card-title';
        section.appendChild(h1);

        const p = document.createElement('p');
        p.className = 'card-content';
        section.appendChild(p);

        const btnLink = document.createElement('button');
        btnLink.className = 'btn-link';
        btnLink.textContent = 'Visitar';
        section.appendChild(btnLink);


        if(element.projectShow == 'sim'){

            img.src = card.img;
            h1.textContent = card.title;
            p.textContent = card.content;

            btnLink.addEventListener('click', () => visit(card.link));

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