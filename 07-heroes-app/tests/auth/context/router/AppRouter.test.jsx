import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthContext } from "../../../../src/auth";
import { AppRouter } from "../../../../src/router/AppRouter";

describe('Pruebas en AppRouter', () => { 
    
    test('Debe mostrar el login si no esta autenticado', () => { 
        
        const contextValue = {
            logged: false
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/marvel']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        screen.debug();

        expect(screen.getAllByText('Login').length).toBe(2);

    });

    test('Debe mostrar el componente de Marvel si esta autenticado', () => { 
        
        const contextValue = {
            logged: true,
            user: {
                id: '123',
                name: 'Mike'
            }
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <AppRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        screen.debug();

        expect(screen.getAllByText('Marvel').length).toBeGreaterThanOrEqual(1);

    });

});