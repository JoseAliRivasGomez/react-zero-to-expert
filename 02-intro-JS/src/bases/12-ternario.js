const activo = true;

let mensaje = '';

if (activo){
    mensaje = 'Activo';
}else{
    mensaje = 'Inactivo';
}

const mensaje2 = (activo) ? 'Activo' : 'Inactivo'; //hace algo si es true o false
const mensaje3 = activo && 'Activo'; //solo hace algo si es true

console.log(mensaje);
console.log(mensaje2);
console.log(mensaje3);