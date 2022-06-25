import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"


describe('Pruebas en 07-deses-arr', () => { 
    test('Debe retornar un string y un numero', () => { 

        const [letras, numero] = retornaArreglo();

        expect(letras).toBe('ABC');
        expect(numero).toBe(123);

        expect(typeof letras).toBe('string');
        expect(typeof numero).toBe('number');

        expect(letras).toEqual(expect.any(String))

     })
 })