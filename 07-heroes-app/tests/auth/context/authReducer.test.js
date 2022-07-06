import { authReducer } from "../../../src/auth";
import { types } from "../../../src/auth/types/types";

describe('Pruebas en authReducer', () => { 
    
    test('Debe retornar el estado por defecto', () => { 
        const state = authReducer({logged: false}, {});

        expect(state).toEqual({logged: false});
    });

    test('Debe llamar el login, autenticar y establecer el user', () => { 
        const action = {
            type: types.login,
            payload: {
                id: '123',
                name: 'Kim'
            }
        }

        const state = authReducer({logged: false}, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })
    });

    test('Debe llamar el logout, borrar el name del usuario y logged en false', () => { 
        const state = {
            logged: true,
            user: {id: '123', name: 'Kim'}
        }

        const action = {
            type: types.logout
        }

        const newState = authReducer(state, action);
        expect(newState).toEqual({
            logged: false
        })
    });

});