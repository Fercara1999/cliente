const  CONTENEDOR1 = document.getElementById('c1');

function funcEscribir(){
    const i1 = document.getElementById('i1');
    document.getElementById('c2').innerHTML+=i1.value;
}

document.getElementById('b1').addEventListener('click',funcEscribir);

