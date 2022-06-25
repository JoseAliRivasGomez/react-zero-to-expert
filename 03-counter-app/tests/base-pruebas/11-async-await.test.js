import { getImagen } from "../../src/base-pruebas/11-async-await"


describe('Pruebas de 11-async-await', () => { 

    test('getImagen debe retornar el URL de la imagen', async() => { 
        const url = await getImagen('ZO2EhzjlSnJMYkgeKvRZtE7UrRkxmp42');
        //console.log(url);
        expect (typeof url).toBe('string');
     })

     test('getImagen debe retornar un error si no encuentra la imagen', async() => { 
        const resp = await getImagen('ZO2EhzjlSnJMYkgeKvRZtE7UrRkxmp42_');
        //console.log(resp);
        expect (resp).toBe('No se encontro la imagen');
     })
 })