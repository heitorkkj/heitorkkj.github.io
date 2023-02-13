let resizeWindow = () =>{
    let largura = window.innerWidth
    let altura = window.innerHeight
    let container = document.querySelector('.container')

    if(largura < 1310){
        container.innerHTML = ''
        container.innerHTML = `<div class="responsiv"><img src="./img/fixing.svg"/>Simulador não disponivel para mobile!</div>`
    }
}

alert("Bem-Vindo ao software de treinamento da urna eletronica. Vale lembrar que este programa é uma simulação, logo, pode não conter todas as funcionalidades. Versão: 1° turno eleições municipais - vereador e prefeito.");
alert("Opções de candidato: vereador: 92002 - Sertanejo | vereador: 92001 - Rock | prefeito: 92 - Heavy Metal")
//selecionando elementos do html
let seuVotoPara = document.querySelector('.d-1-1 span');
let cargo = document.querySelector('.d-1-2 span');
let descricao = document.querySelector('.d-1-4');
let aviso = document.querySelector('.d-2');
let lateral = document.querySelector('.d-2-right');
let numeros = document.querySelector('.d-1-3');
//Variaveis de ambiente
let etapaAtual = 0; 
let numero = '';
let votoBranco = false;
let votoNulo = false; 
let votos = []; 

//Funcao para iniciar a urna
function comecarEtapa(){
    let etapa = etapas[etapaAtual]; 
    let numeroHtml = ''; 
    numero = '';
    votoBranco = false;
    votoNulo = false; 

    for(let count=0; count<etapa.numeros; count++){
        if(count == 0){
        numeroHtml += '<div class="numero pisca"></div>';
        }else{
            numeroHtml += '<div class="numero"></div>';
        }
    }
    seuVotoPara.style.display = 'none';
    cargo.innerHTML = etapa.titulo;
    descricao.innerHTML = ''; 
    aviso.style.display = 'none';
    lateral.innerHTML = '';
    numeros.innerHTML = numeroHtml;
}
//Função dos botoes 
function clicou(n) {
    let elNumero = document.querySelector('.numero.pisca');
    if(elNumero != null){
        elNumero.innerHTML = n;
        numero = `${numero}${n}`;
        elNumero.classList.remove('pisca'); 
        if(elNumero.nextElementSibling != null){
            elNumero.nextElementSibling.classList.add('pisca');
        }else{
            atualizarInterface();
        }
    }
}
function atualizarInterface(){
    let etapa = etapas[etapaAtual]; 
    let candidato = etapa.candidatos.filter((item)=>{
        if(item.numero == numero){
            return true; 
        }else{
            return false; 
        }
    });

    if(candidato.length > 0){
        candidato = candidato[0]; 
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block'; 
        descricao.innerHTML = `<br/><br/>Nome: ${candidato.nome}<br /><br/><br/>Partido: ${candidato.partido}<br />`;
        let fotosHTML =''; 
        for(let i in candidato.fotos){
            if(candidato.fotos[i].small){
                fotosHTML += `<div class="d-2-small"><img src="${candidato.fotos[i].url}" alt""/>${candidato.fotos[i].legenda}</div>`;
                descricao.innerHTML = ''; 
                descricao.innerHTML = `<br/><br/>Nome: ${candidato.nome}<br /><br/><br/>Partido: ${candidato.partido}<br /><br/>Vice: ${candidato.vice}`;
            }else{
                fotosHTML += `<div class="d-2-image"><img src="${candidato.fotos[i].url}" alt""/>${candidato.fotos[i].legenda}</div>`;
            }
        }
        lateral.innerHTML = fotosHTML;
    }else{
        seuVotoPara.style.display = 'block';
        aviso.style.display = 'block'; 
        descricao.innerHTML = `<div class="aviso--grande pisca">VOTO NULO</div>`;
        votoNulo = true;
    }
}
//Configuração dos botoes 
function branco(){
    if(numero == ''){
        votoBranco = true; 
        seuVotoPara.style.display = 'block'; 
        aviso.style.display = 'block'; 
        numeros.innerHTML = '';
        descricao.innerHTML = '<div class="aviso--grande pisca">VOTO BRANCO</div>';
    }else{
        alert('Para votar em branco. não pode ter números digitados!');
    }
}
function confirma(){
    let etapa = etapas[etapaAtual]; 
    let votoConfirmado = false;
    if(votoBranco){
        votoConfirmado = true;
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'branco'
        });   
    }else if(numero.length == etapa.numeros){
        votoConfirmado = true; 
        if(votoNulo){
            votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: 'nulo'
        }); 
    } else{
        votos.push({
            etapa: etapas[etapaAtual].titulo,
            voto: numero
        });
     }  
    }
    if(votoConfirmado){
        etapaAtual++;
        if(etapas[etapaAtual] != undefined){
            comecarEtapa();
        }else{
            document.querySelector('#tela').innerHTML = '<div class="aviso-fim pisca">FIM</div>'
            console.log(votos);
        }
    }
}
function corrige(){
    comecarEtapa();
}


comecarEtapa();

