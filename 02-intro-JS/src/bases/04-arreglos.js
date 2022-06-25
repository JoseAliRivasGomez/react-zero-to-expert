const arreglo = new Array(100);
arreglo.push(1); //100 posiciones vacias y agrega otra

console.log(arreglo);



const arreglo2 = [];
arreglo2.push(1);
arreglo2.push(2);

console.log(arreglo2);



const arreglo3 = [1,2,3,4];

console.log(arreglo3);



let arreglo4 = arreglo3; //Se asigna la referencia del arreglo ya creado
arreglo4.push(5);

console.log(arreglo3);
console.log(arreglo4);



let arreglo5 = [...arreglo3, 5]; //Copia todo el arreglo y crea uno nuevo

console.log(arreglo3);
console.log(arreglo5);



const arreglo6 = arreglo5.map(function(numero){ //crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos
    return numero * 2;
});

console.log(arreglo5);
console.log(arreglo6);