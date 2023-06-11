const menuItens = [
    {
        href:'index.html',
        icon:'bi bi-house',
        name: 'Home',
    },
    {
        href:'#home-about',
        icon:'bi bi-person',
        name: 'Sobre',
    },
    {
        href:'#home-projects',
        icon:'bi bi-unity',
        name: 'Projetos',
    },
    {
        href:'#home-footer',
        icon:'bi bi-envelope',
        name: 'Contato',
    },
];

const MenuUl = document.getElementById('navbar-menu');

menuItens.map((element)=>{
    MenuUl.insertAdjacentHTML( 'beforeend',`
        <li>
            <a href=${element.href} onclick="abrirMenu()">
                <i class="${element.icon}"></i>
                ${element.name}
            </a>
        </li>
    `);
});
