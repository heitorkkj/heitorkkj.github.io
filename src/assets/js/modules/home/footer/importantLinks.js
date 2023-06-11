const Links = [
    {
        name:'instagram',
        href:'https://www.instagram.com/heitorsantos548/',
    },
    {
        name:'linkedin',
        href:'https://www.linkedin.com/in/heitor-santos-alves/',
    },
    {
        name:'github',
        href:'https://github.com/Heitorkkj/',
    },
];

const listLinks = document.getElementById('list-links');

Links.map((element)=>{
    listLinks.insertAdjacentHTML( 'beforeend',`
        <li>
            <a href=${element.href} target="_blanck">
                <i class="bi bi-${element.name}"></i>
            </a>
        </li>
    `);
});
