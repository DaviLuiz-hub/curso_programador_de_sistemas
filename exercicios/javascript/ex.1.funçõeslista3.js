function polaridade (numero) {

    let resposta;
    
    
    
    if(numero>0) {
        resposta = "Postivo";
    } else { 
        if(numero===0) {
            resposta = "Zero";
        } else {  
            resposta = "negativo";
        }  
    }
    return resposta;
}

console.log(polaridade(5));
console.log(polaridade(-1));
console.log(polaridade(0));