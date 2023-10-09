function piramideNumeros(){

    let nLineas = 5;

    resultado = "";

    for(let i = 1 ; i < nLineas ; i++){
        for(let espacios = nLineas-1 ; espacios > i ; espacios--){
            resultado += "-";
        }
        for(let numeros = 1 ; numeros <= (i*2-1) ; numeros++){
            resultado += "1";
        }
        resultado += "<br>";
    }

    document.write(resultado);
}

piramideNumeros();