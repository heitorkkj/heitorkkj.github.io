const consultarApi = (url) =>{

    const obterDados = (resolve, reject) =>{
        fetch(url)
        .then( data => {            
            return data.json()
        })         
        .then(resolve)
        .catch(reject);
    }

    return new Promise(obterDados)
}



