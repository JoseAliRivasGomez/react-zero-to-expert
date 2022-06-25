const persona = {
    nombre: "Kim",
    apellido: "Wexler",
    edad: 45,
};

console.log(persona.nombre);
console.log(persona.apellido);
console.log(persona.edad);



const {nombre:nomb, edad} = persona;

console.log(nomb);
console.log(edad);



const retornaPersona = ({nombre, edad, apellido = "Wexler"}) => { //Valor por defecto
    console.log(nombre, edad, apellido);
}

retornaPersona(persona);



const usarContext = ({nombre, edad, apellido = "Wexler"}) => { 
    return{
        nom: nombre,
        anios: edad,
        direccion: {
            ciudad: "Quesada",
            zip: 21001,
        }
    }
}

const {nom, anios, direccion:{ciudad, zip}} = usarContext(persona);
const {direccion} = usarContext(persona);

console.log(nom, anios)
console.log(ciudad, zip)
console.log(direccion)