import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../../../src/auth";
import { Navbar } from "../../../../../src/UI";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en Navbar', () => { 

    const contextValue = {
        logged: true,
        user: {
            id: '123',
            name: 'Kim'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());
    
    test('Debe mostrar el nombre del usuario logeado', () => { 
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        screen.debug();

        expect(screen.getByText('Kim')).toBeTruthy();

    });

    test('Debe llamar el logout y navigate cuando se hace click en el boton', () => { 
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <Navbar />
                </MemoryRouter>
            </AuthContext.Provider>
        );
        screen.debug();

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", {"replace": true});

    });

});