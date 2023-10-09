// Desarrolla una página que muestre el número de filas que contendrá un rombo hueco (imagen superior izquierda).
// Cuando el usuario cambie el valor del input, que cambie el rombo. Los rombos “se dibujan” con el carácter asterisco.

// Función para elegir que función tomar decidiendo si el número es o no par
function eligeFuncion(){
  let nLineas = parseInt(document.getElementById('n1').value);

  if (nLineas <= 2 ){
    window.alert("Has introducido un número demasiado bajo, no se puede hacer un rombo con menos de 3 líneas");
  }else if (nLineas % 2 == 0){
    generaRomboLineasPar();
  }else{
    generaRomboLineasImpar();
  }
}

// Función si es par
function generaRomboLineasPar(){

  let nLineas = parseInt(document.getElementById('n1').value);
  let lineasPar = nLineas /2;
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
      resultado+="*";
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
        resultado+="*";
      }  
    }

    resultado+="<br>";
  }

  document.getElementById('rombo').innerHTML = resultado;
}

// Función si es impar
function generaRomboLineasImpar(){

  let nLineas = parseInt(document.getElementById('n1').value);
  let lineasImpar = Math.trunc(nLineas/2);
  console.log(lineasImpar);
  let resultado = "";

  //Generación de la parte de arriba
  for(let i = 1 ; i <= lineasImpar ; i++){
    for(let espacios = lineasImpar ; espacios >= i;espacios--){
      resultado+="&nbsp";
    }
    for(let asteriscos = 1; asteriscos <= i*2-1 ; asteriscos++){
      if(asteriscos != 1 && asteriscos != i*2-1){
        resultado+="&nbsp";
      }else{
        resultado+="*";
      }
    }
    resultado+="<br>";
  }
  //Generación de la línea intermedia
  for(let m = 1 ; m <= nLineas ; m++){
    if(m != 1 && m != nLineas ){
      resultado+="&nbsp";
    }else{
      resultado+= "*";
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
        resultado+="*";
      }
    }
    resultado+="<br>";
  }

  document.getElementById('rombo').innerHTML = resultado;
}

generaRomboLineasImpar();