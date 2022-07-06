import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { AuthContext } from "../../../../src/auth";
import { PublicRoute } from "../../../../src/router/PublicRoute";

describe('Pruebas en PublicRoute', () => { 
    
    test('Debe mostrar el children si no esta autenticado', () => { 

        const contextValue = {
            logged: false
        }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        )    

        screen.debug();
        expect(screen.getByText('Ruta publica')).toBeTruthy();
    });

    test('Debe navegar si esta autenticado', () => { 
        
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
                    <Routes>
                        <Route path="login" element={
                            <PublicRoute>
                                <h1>Ruta publica</h1>
                            </PublicRoute>
                        } />
                        <Route path="/" element={<h1>Marvel</h1>} />
                    </Routes>
                    
                </MemoryRouter>      
            </AuthContext.Provider>
        )  
        
        screen.debug();
        expect(screen.getByText('Marvel')).toBeTruthy();

    });

});