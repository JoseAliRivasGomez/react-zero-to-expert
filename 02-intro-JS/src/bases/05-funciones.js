function saludar(nombre){
    return `Hola, ${nombre}`;
}

console.log(saludar("Kim"));

saludar = 20;

console.log(saludar);



const saludar2 = function (nombre){ //Es mejor crear las funciones como constantes para evitar caerles encima
    return `Hola, ${nombre}`;
}

console.log(saludar2("Jimmy"));



const saludar3 = (nombre) => { //Arrow function
    return `Hola, ${nombre}`;
}

console.log(saludar3("Mike"));



const saludar4 = (nombre) => `Hola, ${nombre}`; //Arrow function de 1 linea

console.log(saludar4("Walt"));



const saludar5 = () => `Hola Mundo`; //Arrow function de 1 linea sin parametros

console.log(saludar5());



const getUser = () => { //Arrow function que devuelve un objeto
    return {
        id: '123',
        username: 'KimWexler'
    }
}

console.log(getUser());



const getUser2 = () => ({ //Arrow function que devuelve un objeto simplificado
    id: '123',
    username: 'KimWexler'
});

console.log(getUser2());