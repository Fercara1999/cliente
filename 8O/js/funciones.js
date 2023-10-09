function suma(){

    let n1 = parseInt(document.getElementById('numero1').value);
    let n2 = parseInt(document.getElementById('numero2').value);
    let s = n1+n2;
    document.getElementById('c4').innerHTML+=s;

}

function concatNombre(){

    let nombre = document.getElementById('nombre').value;
    let apellido1 = document.getElementById('apellido1').value;

    let frase = "El nombre de la persona es " + nombre + " y el apellido " + apellido1 + "<br>" ;

    document.getElementById('c4').innerHTML+=frase;

}

// document.getElementById('boton1').addEventListener('click',suma);