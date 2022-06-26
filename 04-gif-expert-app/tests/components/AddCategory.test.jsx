import { render, screen, fireEvent } from "@testing-library/react"
import { AddCategory } from "../../src/components"

describe('Pruebas en AddCategory', () => { 
    
    test('Debe cambiar el valor de la caja de texto', () => { 

        render(<AddCategory onNewCategory={ () => {}} />);

        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: "Kim Wexler"}});

        expect(input.value).toBe('Kim Wexler');

        screen.debug();

    });

     test('Debe llamar onNewCategory si el input tiene un valor', () => { 

        const inputValue = "Kim Wexler";

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox'); 
        const form = screen.getByRole('form'); //aria-label

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        screen.debug();

        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1);
        expect(onNewCategory).toHaveBeenLastCalledWith(inputValue);
        
    });

    test('No debe llamar onNewCategory si el input esta vacio', () => { 

        const inputValue = "";

        const onNewCategory = jest.fn();

        render(<AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox'); 
        const form = screen.getByRole('form'); //aria-label

        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);

        screen.debug();

        expect(input.value).toBe('');
        expect(onNewCategory).not.toHaveBeenCalled();
        
    });

 })