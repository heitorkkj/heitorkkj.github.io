let areaDeProdutos = document.querySelector('#corpo')
let produtos 
let produtosFavoritados = []

let inputPesquisar = document.getElementById('pesquisar')
let inputExclusivo = document.getElementById('exclusivo')
let inputPromocao = document.getElementById('promocao')

let favorito = 'bi bi-star'

inputPesquisar.oninput = () =>{
    let produtoDigitado = inputPesquisar.value
    produtoDigitado = produtoDigitado.toLowerCase()
    produtoDigitado = produtoDigitado.normalize('NFD').replace(/[\u0300-\u036f]/g, "")
    produtoDigitado = produtoDigitado.trim()

    produtos.forEach(element => {
        let nomeDoProduto = element.nome.toLowerCase()
        nomeDoProduto = nomeDoProduto.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

        if(nomeDoProduto == produtoDigitado){
            let acao = 'filtro-por-nome'
            criarAplicacao(element, acao)
        }
    })

    if(produtoDigitado == ''){
        areaDeProdutos.innerHTML = ''
        criarAplicacao(produtos)
    }
}

inputExclusivo.addEventListener( 'change', function() {

    if(this.checked) {
        areaDeProdutos.innerHTML = ''

        produtos.forEach(element => {            
            if(element.exclusivo == true){
                let acao = 'filtro-por-categoria'
                criarAplicacao(element, acao, element.exclusivo)
            }
        })
    }else{
        areaDeProdutos.innerHTML = ''
        criarAplicacao(produtos)
    }
});

inputPromocao.addEventListener( 'change', function() {
    if(this.checked) {
        areaDeProdutos.innerHTML = ''

        produtos.forEach(element => {            
            if(element.promocao == true){
                let acao = 'filtro-por-categoria'
                criarAplicacao(element, acao, element.promocao)
            }
        })
    }else{
        areaDeProdutos.innerHTML = ''
        criarAplicacao(produtos)
    }    
})

const criarAplicacao = (data, acao = '', categoria = '') =>{

    if(acao == '' && categoria == ''){
        produtos = data  

        produtos.forEach(element => {

            favorito = produtosFavoritados.indexOf(element.nome) != -1 ? 'bi bi-star-fill' :
            'bi bi-star'

            let categoria = element.promocao == true ? 'Promocao' : 'Exclusivo'
            let nomeDoProduto = element.nome
            let imagemDoProduto = element.imagem
            let idDoProduto = element.id
            let descCurtaProduto = element.decricaoCurta
            let valorDoProduto = element.valor
            valorDoProduto = valorDoProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            areaDeProdutos.innerHTML += `
            <article class="card" id="${idDoProduto}" onclick="abrirProduto(${idDoProduto})">
                <img class="card-img" src="${imagemDoProduto}" >
                <h1 class="card-title" id="nome_${idDoProduto}">${nomeDoProduto} <i class="${favorito}" onclick="favoritar(${idDoProduto});event.stopPropagation()" id="favorito_${idDoProduto}"></i></h1>
                <h5>${categoria}</h5>
                <p class="card-content">${descCurtaProduto}</p> 

                <output>${valorDoProduto}</output>
            </article>`
        })
    }else if(acao == 'filtro-por-nome' && categoria == ''){
            let produtoFiltrado = data

            areaDeProdutos.innerHTML = ''
            favorito = produtosFavoritados.indexOf(produtoFiltrado.nome) != -1 ? 'bi bi-star-fill' :
            'bi bi-star'

            let categoria = produtoFiltrado.promocao == true ? 'Promocao' : 'Exclusivo'
            let nomeDoProduto = produtoFiltrado.nome
            let imagemDoProduto = produtoFiltrado.imagem
            let idDoProduto = produtoFiltrado.id
            let descCurtaProduto = produtoFiltrado.decricaoCurta
            let valorDoProduto = produtoFiltrado.valor
            valorDoProduto = valorDoProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            areaDeProdutos.innerHTML += `
            <article class="card" id="${idDoProduto}"  onclick="abrirProduto(${idDoProduto})">
                <img class="card-img" src="${imagemDoProduto}">
                <h1 class="card-title" id="nome_${idDoProduto}">${nomeDoProduto} <i class="${favorito}" onclick="favoritar(${idDoProduto});event.stopPropagation()" id="favorito_${idDoProduto}"></i></h1>
                <h5>${categoria}</h5>
                <p class="card-content">${descCurtaProduto}</p> 

                <output>${valorDoProduto}</output>
            </article>`
    }else if(acao == 'filtro-por-categoria'){
            let produtoFiltrado = data

            favorito = produtosFavoritados.indexOf(produtoFiltrado.nome) != -1 ? 'bi bi-star-fill' :
            'bi bi-star'

            let categoria = produtoFiltrado.promocao == true ? 'Promocao' : 'Exclusivo'
            let nomeDoProduto = produtoFiltrado.nome
            let imagemDoProduto = produtoFiltrado.imagem
            let idDoProduto = produtoFiltrado.id
            let descCurtaProduto = produtoFiltrado.decricaoCurta
            let valorDoProduto = produtoFiltrado.valor
            valorDoProduto = valorDoProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            areaDeProdutos.innerHTML += `
            <article class="card" id="${idDoProduto}" onclick="abrirProduto(${idDoProduto})">
                <img class="card-img" src="${imagemDoProduto}">
                <h1 class="card-title" id="nome_${idDoProduto}">${nomeDoProduto} <i class="${favorito}" onclick="favoritar(${idDoProduto});event.stopPropagation()" id="favorito_${idDoProduto}"></i></h1>
                <h5>${categoria}</h5>
                <p class="card-content">${descCurtaProduto}</p> 

                <output>${valorDoProduto}</output>
            </article>`
    }else if(acao == 'produto-em-destaque'){
        let produtoFiltrado = data

        favorito = produtosFavoritados.indexOf(produtoFiltrado.nome) != -1 ? 'bi bi-star-fill' :
        'bi bi-star'
       
        let categoria = produtoFiltrado.promocao == true ? 'Promocao' : 'Exclusivo'
        let nomeDoProduto = produtoFiltrado.nome
        let imagemDoProduto = produtoFiltrado.imagem
        let idDoProduto = produtoFiltrado.id
        let descCurtaProduto = produtoFiltrado.decricaoCurta
        let descCompleta = produtoFiltrado.descricaoLonga
        let fichaTecnica = produtoFiltrado.fichaTecnica

        let valorDoProduto = produtoFiltrado.valor
        valorDoProduto = valorDoProduto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        areaDeProdutos.innerHTML += `
        <section class="cardDestaque">
            <div class="col-img">
                <img src="${imagemDoProduto}"/>

                <output>${valorDoProduto}</output>
            </div>

            <div class="col-content">
                <h1 class="card-title" id="nome_${idDoProduto}">${nomeDoProduto} <i class="${favorito}" onclick="favoritar(${idDoProduto})" id="favorito_${idDoProduto}"></i></h1>

                <p class="desc-abrev">
                    ${descCurtaProduto}
                </p>

                <hr/>

                <p class="desc-completa">
                    ${descCompleta} 
                </p>
            </div>

            <div class="col-tecnica">
                <a id="voltarPagina">Voltar à lista</a>

                <ul id="lista-tecnica">
                    <h1>O que você precisa saber</h1>    

                </ul>
            </div>
        </section>
        `
        let linkVoltarPagina = document.querySelector('#voltarPagina')
        
        linkVoltarPagina.onclick = () =>{
            areaDeProdutos.innerHTML = ''
            criarAplicacao(produtos)
        }

        let areaFichaTecnica = document.querySelector('#lista-tecnica')

        fichaTecnica.forEach(element => {
            areaFichaTecnica.innerHTML += `<li>${element.titulo}: ${element.descricao}` 
        });
}

}

// recuperando data da API
fetch('https://www.mocky.io/v2/5d3b57023000005500a2a0a6')
    .then(data => {            
        return data.json()
    }).then(data =>{
        let produtos = data.produtos
        criarAplicacao(produtos)
    })
.catch(e => console.log(e));


let favoritar = (id) =>{
    let nomeDoProduto = document.querySelector(`#nome_${id}`).innerText
    let statusFavorito = document.querySelector(`#favorito_${id}`)

    if(produtosFavoritados.indexOf(nomeDoProduto) > -1){
        let count = produtosFavoritados.indexOf(nomeDoProduto)

        produtosFavoritados.splice(count, 1)
    }else{
        produtosFavoritados.push(nomeDoProduto)
    }

    statusFavorito.className = statusFavorito.className == 'bi bi-star' ? 'bi bi-star-fill' : 'bi bi-star'
}

let abrirProduto =  (id) =>{
    let idSelecionado = id

    produtos.forEach(element =>{
        if(idSelecionado == element.id){
            let acao = 'produto-em-destaque'
            areaDeProdutos.innerHTML = ''
            criarAplicacao(element, acao)
        }
    })
}