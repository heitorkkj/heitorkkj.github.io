function calcular(tipo , valor){
    if(tipo === 'acao'){
        if(valor === 'c'){
            document.getElementById('resultado').value = '';
        }
        if(valor === '+' || valor === '-' || valor === '*'|| valor === '/'|| valor === '.' || valor === '%'){
            document.getElementById('resultado').value += valor;
        }
        if(valor === '+/-'){
            let numero = document.getElementById('resultado').value;
            if(numero<0){
                numero = numero.replace('-','+');
                document.getElementById('resultado').value = '';
                document.getElementById('resultado').value += numero;
            }else{
                numero = numero.replace('+','-');
                document.getElementById('resultado').value = '';
                document.getElementById('resultado').value += numero;
            }
        }
        if(valor === '='){
            if(document.getElementById('resultado').value.indexOf('%') == true){
                let porcentagem = document.getElementById('resultado').value; 
                porcentagem = porcentagem.replace('%','/100*'); 
                document.getElementById('resultado').value = eval(porcentagem);
            }else{
                let valor_campo = eval(document.getElementById('resultado').value);
                document.getElementById('resultado').value = valor_campo;
            }
        }

    }else if(tipo === 'valor'){

        
        document.getElementById('resultado').value += valor;
    }

}