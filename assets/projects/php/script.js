let voltarPag = () =>{
    window.close()
}

let appNaoPostado = () =>{
     alert('Desculpe-me o app não está disponivel para ser acessado')
 }

let appPostado = (endereco) =>{
     window.location.href = ` http://${endereco}.rf.gd`
}