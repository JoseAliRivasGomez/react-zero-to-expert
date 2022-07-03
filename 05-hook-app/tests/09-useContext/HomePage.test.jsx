import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";


describe('Pruebas en HomePage', () => { 

    const user = {id: 123, name: 'Jimmy', email: 'jimmy@gmail.com'};
    
    test('Debe mostrar el componente sin el usuario', () => { 
        render(
            <UserContext.Provider value ={{user: null}}>
                <HomePage />
            </UserContext.Provider>
        );
        //screen.debug();

        const preTag = screen.getByLabelText('pre');
        //console.log(preTag.innerHTML);
        expect(preTag.innerHTML).toBe('null');

    });

    test('Debe mostrar el componente con el usuario', () => { 
        render(
            <UserContext.Provider value ={{user: user}}>
                <HomePage />
            </UserContext.Provider>
        );
        //screen.debug();

        const preTag = screen.getByLabelText('pre'); //aria-label
        //console.log(preTag.innerHTML);
        expect(preTag.innerHTML).toContain(user.id.toString());
        expect(preTag.innerHTML).toContain(user.name);
        expect(preTag.innerHTML).toContain(user.email);

    });

});