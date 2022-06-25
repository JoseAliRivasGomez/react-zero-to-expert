const persona = {
    nombre: "Kim",
    apellido: "Wexler",
    edad: 45,
    direccion: {
        ciudad: "Quesada",
        zip: 21001,
        lat: 14.2242,
        lng: 23.523,
    }
};

console.log(persona.nombre);
console.log(persona);
console.log({persona});
console.table(persona);



const persona2 = persona; //Se asigna la referencia del objeto ya creado
persona2.nombre = "Jimmy";

console.log(persona2);
console.log(persona);



const persona3 = { ...persona }; //Copia todo el objeto y crea uno nuevo
persona3.nombre = "Mike";

console.log(persona3);
console.log(persona);