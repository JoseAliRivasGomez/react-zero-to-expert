import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { SearchPage } from "../../../../../src/heroes";

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate
}));

describe('Pruebas en Searchpage', () => { 

    beforeEach(() => jest.clearAllMocks());
    
    test('Debe mostrarse correctamente con valores por defecto', () => { 
        
        const {container} = render(
            <MemoryRouter>
                <SearchPage />
            </MemoryRouter>
        );
        screen.debug();
        expect(container).toMatchSnapshot();

    });

    test('Debe mostrar a Batman y el input con el valor del queryString', () => { 
        
        render(
            <MemoryRouter initialEntries={['/search?s=batman']}>
                <SearchPage />
            </MemoryRouter>
        );
        screen.debug();

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');
        
        const img = screen.getByRole('img');
        expect(img.src).toContain('/assets/heroes/dc-batman.jpg');
        
        //div que tiene display none como estilo, yo no lo hice asi
        // const alert = screen.getByLabelText('alert-danger'); //aria-label
        // expect(alert.style.display).toBe('none');

    });

    test('Debe mostrar un error si no se encuentra el heroe (peacemaker)', () => { 
        render(
            <MemoryRouter initialEntries={['/search?s=peacemaker']}>
                <SearchPage />
            </MemoryRouter>
        );
        screen.debug();

        const alert = screen.getByLabelText('alert-danger'); //aria-label
        expect(alert.style.display).toBe('');

    });

    test('Debe llamar el navigate a la pantalla nueva al buscar superman', () => { 

        const inputValue = 'superman'
        
        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage />
            </MemoryRouter>
        );
        screen.debug();

        const input = screen.getByRole('textbox');
        fireEvent.change(input, {target: {name: 'searchText', value: inputValue}});
        console.log(input.value);

        const form = screen.getByRole('form'); //aria-label
        fireEvent.submit(form);

        expect(mockedUseNavigate).toHaveBeenCalledWith(`?s=${inputValue}`);

    });

});