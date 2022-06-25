import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";


describe('Pruebas en 09-promesas', () => { 

    test('getHeroesByIdAsync debe retornar un heroe', (done) => { 
        const id = 1;
        getHeroeByIdAsync(id)
            .then( hero => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done();
            })
     })

     test('getHeroesByIdAsync debe retornar un error si heroe no existe', (done) => { 
        const id = 100;
        getHeroeByIdAsync(id)
            // .then( hero => {
            //     expect(hero).toBeFalsy();
            //     done();
            // })
            .catch(error => {
                //console.log(error);
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`)
                done();
            })
     })
 })