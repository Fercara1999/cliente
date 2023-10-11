// Realiza una página web que pida al usuario:
// · El número de filas
// · El caracter de las lineas de las figuras(por ejemplo, el asterisco)
// · El caracter de relleno de las figuras
// · El color de relleno de las figuras
// Se pide:
// a) Dibuja en un div un rombo hueco con esa cantidad de filas
// b) En otro div dibuja un cuadrado hueco con esa misma cantidad de filas
// c) En otro div dibuja el rombo relleno de color
// d) En otro div dibuja el cuadrado con relleno de color
// e) En otro div dubuja un cuadrado teniendo en cuenta los signos de la tabla ascii extendida para dibujar figuras cuadradas

// a) Dibuja en un div un rombo hueco con esa cantidad de filas
function ejercicioA(){

    let nLineas = parseInt(document.getElementById('o1').value);
    let caracterElegido = document.getElementById('o2').value;
    let resultado="";
      
    if (nLineas <= 2 ){
      window.alert("Has introducido un número demasiado bajo, no se puede hacer un rombo con menos de 3 líneas");
    }else if (nLineas % 2 == 0){
      
        let lineasPar = nLineas /2;

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

    }else{
        let nLineas = parseInt(document.getElementById('o1').value);
        let lineasImpar = Math.trunc(nLineas/2);
        console.log(lineasImpar);
      
        //Generación de la parte de arriba
        for(let i = 1 ; i <= lineasImpar ; i++){
          for(let espacios = lineasImpar ; espacios >= i;espacios--){
            resultado+="&nbsp";
          }
          for(let asteriscos = 1; asteriscos <= i*2-1 ; asteriscos++){
            if(asteriscos != 1 && asteriscos != i*2-1){
              resultado+="&nbsp";
            }else{
              resultado+=caracterElegido;
            }
          }
          resultado+="<br>";
        }
        //Generación de la línea intermedia
        for(let m = 1 ; m <= nLineas ; m++){
          if(m != 1 && m != nLineas ){
            resultado+="&nbsp";
          }else{
            resultado+= caracterElegido;
          }
        }
        resultado+="<br>";
        //Generación de la parte de abajo
        for(let i = lineasImpar ; i >= 1 ; i--){
          for(let espacios = 0 ; espacios <= lineasImpar-i ; espacios++){
            resultado+="&nbsp";
          }
          for(let asteriscos = i*2-1 ; asteriscos >= 1 ; asteriscos--){
            if(asteriscos!=1 && asteriscos !=i*2-1){
              resultado+="&nbsp";
            }else{
              resultado+=caracterElegido;
            }
          }
          resultado+="<br>";
        }
      document.getElementById('div1').innerHTML=(resultado);
    }
      
    document.getElementById('div1').innerHTML=(resultado);
}

// b) En otro div dibuja un cuadrado hueco con esa misma cantidad de filas
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

    document.getElementById('div2').innerHTML=(resultado);
}

// c) En otro div dibuja el rombo relleno de color
function ejercicioC(){

  let nLineas = parseInt(document.getElementById('o1').value);
  let caracterElegido = document.getElementById('o2').value;
  let caracterRelleno = document.getElementById('o3').value;
  let resultado="";
    
  if (nLineas % 2 == 0){
    
      let lineasPar = nLineas /2;

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

  }else{
      let nLineas = parseInt(document.getElementById('o1').value);
      let lineasImpar = Math.trunc(nLineas/2);
      console.log(lineasImpar);
    
      //Generación de la parte de arriba
      for(let i = 1 ; i <= lineasImpar ; i++){
        for(let espacios = lineasImpar ; espacios >= i;espacios--){
          resultado+="&nbsp";
        }
        for(let asteriscos = 1; asteriscos <= i*2-1 ; asteriscos++){
          if(asteriscos != 1 && asteriscos != i*2-1){
            resultado+=caracterRelleno;
          }else{
            resultado+=caracterElegido;
          }
        }
        resultado+="<br>";
      }
      //Generación de la línea intermedia
      for(let m = 1 ; m <= nLineas ; m++){
        if(m != 1 && m != nLineas ){
          resultado+=caracterRelleno;
        }else{
          resultado+= caracterElegido;
        }
      }
      resultado+="<br>";
      //Generación de la parte de abajo
      for(let i = lineasImpar ; i >= 1 ; i--){
        for(let espacios = 0 ; espacios <= lineasImpar-i ; espacios++){
          resultado+="&nbsp";
        }
        for(let asteriscos = i*2-1 ; asteriscos >= 1 ; asteriscos--){
          if(asteriscos!=1 && asteriscos !=i*2-1){
            resultado+=caracterRelleno;
          }else{
            resultado+=caracterElegido;
          }
        }
        resultado+="<br>";
      }
    document.getElementById('div3').innerHTML=(resultado);
  }
    
  document.getElementById('div3').innerHTML=(resultado);
}

// d) En otro div dibuja el cuadrado con relleno de color
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

    document.getElementById('div4').innerHTML=(resultado);
}

// e) En otro div dubuja un cuadrado teniendo en cuenta los signos de la tabla ascii extendida para dibujar figuras cuadradas
function ejercicioE(){

    let filas = document.getElementById('o1').value;
    let caracterElegido = document.getElementById('o2').value;

    resultado="";

    
    for(let i = 0 ; i < filas ; i++){
        
        for(let caracter = 1 ; caracter <= filas ; caracter++){
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

    document.getElementById('div5').innerHTML=(resultado);

}