import {getHeroeById} from './bases/08-imp-exp'

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroeById(2);
//         //console.log(heroe);
//         resolve(heroe);
//         reject("Error");
//     }, 2000);
// }); //Son async y se ejecutan despues de lo sync

// promesa.then((heroe) => {
//     console.log('Heroe: ', heroe)
// })
// .catch(error => console.warn(error));

const getHeroeByIdAsync = (id) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroeById(id);

            if(heroe){
                resolve(heroe);
            }else{
                reject("Error");
            }
            
        }, 1000);
    }); //Son async y se ejecutan despues de lo sync

}

getHeroeByIdAsync(4).then((heroe) =>{
    console.log('Heroe: ', heroe)
})
.catch((error) => console.warn(error));

getHeroeByIdAsync(2)
.then(console.log)
.catch(console.warn);