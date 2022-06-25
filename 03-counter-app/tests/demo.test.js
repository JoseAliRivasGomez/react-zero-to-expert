
describe('Pruebas en <DemoComponent/>>', () => { 
    
    test('Esta prueba no debe fallar', () => {
    // if (1 === 1){
    //     throw new Error('No puede dividir entre 0')
    // }

    const message1 = 'Hola Mundo';

    const message2 = message1.trim();

    expect(message1).toBe(message2);

}); })

