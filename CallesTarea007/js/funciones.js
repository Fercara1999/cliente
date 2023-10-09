function ejercicioA(){

    let filas = document.getElementById('o1').value;
    let caracterElegido = document.getElementById('o2').value;
    console.log(filas);
        let lineasPar = filas /2;
        let resultado = "";
      
        //Generación de la parte de arriba
        for(let i = 1 ; i <= lineasPar ; i++){
          for(let espacios = lineasPar-1 ; espacios >= i;espacios--){
            resultado+="&nbsp";
          }
          for(let asteriscos = 1; asteriscos <= i*2-1 ; asteriscos++){
            if (asteriscos != 1 && asteriscos != i*2-1){
              resultado+="&nbsp";
            }else{
            resultado+=caracterElegido;
            }
          }
          resultado+="<br>";
        }
        //Generación de la parte de abajo
        for(let i = lineasPar ; i >= 1 ; i--){
          for(let espacios = 0 ; espacios < lineasPar-i ; espacios++){
            resultado+="&nbsp";
          }
          for(let asteriscos = i*2-1 ; asteriscos >= 1 ; asteriscos--){
            if(asteriscos != 1 && asteriscos != i*2-1){
              resultado+="&nbsp";
            }else{
              resultado+=caracterElegido;
            }  
          }
      
          resultado+="<br>";
        }
      
        document.getElementById('div1').innerHTML=(resultado);
}


function ejercicioB(){

    let filas = document.getElementById('o1').value;
    let caracterElegido = document.getElementById('o2').value;
    console.log(filas);
    resultado = "";

    for(let i = 0 ; i < filas ; i++){
        
        for(let caracter = 1 ; caracter <= filas ; caracter++){
            if(i == 0 || i==filas-1 || caracter == 1 || caracter == filas){
                resultado+=caracterElegido;
            }else{
                resultado+="&nbsp";
            }
        }
        resultado+="<br>";
    }

    // document.write(resultado);
    document.getElementById('div2').innerHTML=(resultado);
}

function ejercicioC(){

    let filas = document.getElementById('o1').value;
    let caracterElegido = document.getElementById('o2').value;
    let caracterRelleno = document.getElementById('o3').value;
    console.log(filas);
        let lineasPar = filas /2;
        let resultado = "";
      
        //Generación de la parte de arriba
        for(let i = 1 ; i <= lineasPar ; i++){
          for(let espacios = lineasPar-1 ; espacios >= i;espacios--){
            resultado+="&nbsp";
          }
          for(let asteriscos = 1; asteriscos <= i*2-1 ; asteriscos++){
            if (asteriscos != 1 && asteriscos != i*2-1){
              resultado+=caracterRelleno;
            }else{
            resultado+=caracterElegido;
            }
          }
          resultado+="<br>";
        }
        //Generación de la parte de abajo
        for(let i = lineasPar ; i >= 1 ; i--){
          for(let espacios = 0 ; espacios < lineasPar-i ; espacios++){
            resultado+="&nbsp";
          }
          for(let asteriscos = i*2-1 ; asteriscos >= 1 ; asteriscos--){
            if(asteriscos != 1 && asteriscos != i*2-1){
              resultado+=caracterRelleno;
            }else{
              resultado+=caracterElegido;
            }  
          }
      
          resultado+="<br>";
        }
      
        document.getElementById('div3').innerHTML=(resultado);
}

function ejercicioD(){

    let filas = document.getElementById('o1').value;
    let caracterElegido = document.getElementById('o2').value;
    let caracterRelleno = document.getElementById('o3').value;
    console.log(filas);
    resultado = "";

    for(let i = 0 ; i < filas ; i++){
        
        for(let caracter = 1 ; caracter <= filas ; caracter++){
            if(i == 0 || i==filas-1 || caracter == 1 || caracter == filas){
                resultado+=caracterElegido;
            }else{
                resultado+=caracterRelleno;
            }
        }
        resultado+="<br>";
    }

    // document.write(resultado);
    document.getElementById('div4').innerHTML=(resultado);
}

function ejercicioE(){

    let filas = document.getElementById('o1').value;
    let caracterElegido = document.getElementById('o2').value;

    resultado="";

    
    for(let i = 0 ; i < filas ; i++){
        
        for(let caracter = 1 ; caracter <= filas ; caracter++){
            // if(i == 0 || i==filas-1 || caracter == 1 || caracter == filas){
            if(i == 0 && caracter == 1){
                resultado+="╔";
            }else if(i == 0 && caracter == filas){
                resultado+="╗";
            }else if(caracter == 1 && i == filas -1){
                resultado+="╚";
            }else if(caracter == filas && i == filas-1){
                resultado+="╝";
                // ||(i == filas-1 && caracter < )
            }else if(i <= 0 || i == filas-1){
                resultado+="═";
            }else if(caracter == 1 || caracter == filas){
                resultado+="║";
            }else{
                resultado+="&nbsp";
            }
        }
        resultado+="<br>";
    }

    // document.write(resultado);
    document.getElementById('div5').innerHTML=(resultado);


}