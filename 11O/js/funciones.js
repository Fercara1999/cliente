// // const Pepe = "Adios";

// try {
//     console.log(Pepe);    
// } catch (error) {
//     console.log(error);
// } finally{
//     console.log("Benito");
// }

// function retirar(saldo,cantidad){
//     if (saldo < cantidad){
//         throw "Saldo insuficiente";
//     }else{
//         return saldo - cantidad;
//     }
// }

// let saldo = 30;
// let cantidad = 200;

// try {
//     saldo = retirar(saldo,cantidad);
//     console.log("Nuevo saldo: " + saldo)
// } catch (error) {
//     console.log(error);
// }

// let resultado = retirar(saldo,cantidad);
// console.log(resultado);

// if (resultado === false){
//     console.log("Saldo insuficiente");
// }else{
//     saldo= resultado;
// }

// let notas = [];

function calcularMedia(notas){

    if (notas.length < 1){
        throw "Notas insuficientes";
    }else{

        let s = 0;
        for (let i = 0 ; i < notas.length ; i++){
            s += notas[i];
        }

        return s / notas.length;
    } 

}

try{
    console.log(calcularMedia([5,7,3]));
}catch(error){
    console.log(error);
}