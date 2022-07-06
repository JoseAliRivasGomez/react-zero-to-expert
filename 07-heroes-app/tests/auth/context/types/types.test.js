import { types } from "../../../../src/auth/types/types";

describe('Pruebas en Types', () => { 
    
    test('Debe regresar estos types', () => { 
        
        expect(types).toEqual({
            login: 'Login',
            logout: 'Logout',
        });

    });

});