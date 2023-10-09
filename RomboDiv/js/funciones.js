function creaRombo(){

    let nLineas = document.getElementById('n1').value;
    // let nLineas = 6;
    console.log(nLineas);
    let resultado = "";

    for(let i = 1 ; i<= nLineas ; i++){
        for(let espacios = nLineas -1 ; espacios >= i ; espacios--){
            resultado+="-";
        }
        for(let asteriscos = 1; asteriscos <= i *2 -1 ; asteriscos++){
            resultado+="*";
        }
        resultado+="<br>";
    }

    document.getElementById('ds2').innerHTML=(resultado);
}

creaRombo();