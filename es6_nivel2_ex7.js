/*
Realitzar un programa en ES6, amb al menys una funció.
Aquest programa demana a l'usuari dos nombres de l'1 a l'10 (con promp es suficient). 
Un cop introduïts, es mostra per consola la taula de multiplicar del número 1 que va fins al número 2.
*/


let num1 = prompt('Ingrese el primer número de 1 a 10..');
let num2 = prompt('Ingrese el segundo número de 1 a 10..');

let multiplicator = (num1 , num2) => {
    let cont = 0;
    let total;

    while( cont <= num2){
        total = num1*cont;
        console.log( num1+' * '+cont+' = '+total);
        cont++;
    }

}

multiplicator(num1,num2);