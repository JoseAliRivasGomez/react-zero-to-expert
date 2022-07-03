import { render, screen, fireEvent } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { LoginPage } from "../../src/09-useContext/LoginPage";

describe('Pruebas en LoginPage', () => { 

    
    
    test('Debe mostrar el componente sin el usuario', () => { 
        render(
            <UserContext.Provider value ={{user: null}}>
                <LoginPage />
            </UserContext.Provider>
        );
        //screen.debug();

        const preTag = screen.getByLabelText('pre'); //aria-label
        //console.log(preTag.innerHTML);
        expect(preTag.innerHTML).toBe('null');
    });

    test('Debe llamar el setUser cuando se hace click en el boton', () => { 

        const setUserMock = jest.fn();
        render(
            <UserContext.Provider value ={{user: null, setUser: setUserMock}}>
                <LoginPage />
            </UserContext.Provider>
        );

        const button = screen.getByRole('button');
        fireEvent.click(button);

        expect(setUserMock).toHaveBeenCalledWith({"email": "jimmy@gmail.com", "id": 123, "name": "Jimmy"});
    });

});