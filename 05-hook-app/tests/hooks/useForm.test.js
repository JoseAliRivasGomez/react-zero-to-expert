import { useForm } from "../../src/hooks";
import { renderHook,act } from "@testing-library/react";

describe('Pruebas en useForm', () => { 

    const initialForm = {
        name: 'Kim',
        email: 'kim@gmail.com'
    }
    
    test('Debe regresar los valores por defecto', () => { 
        const {result} = renderHook(() => useForm(initialForm));    
        //console.log(result);
        
        expect(result.current).toEqual({
            name: initialForm.name,
            email: initialForm.email,
            formState: initialForm,
            inputChange: expect.any(Function),
            resetForm: expect.any(Function)
        })
    });

    test('Debe cambiar el nombre del formulario', () => { 
        const newName = 'Jimmy';
        const {result} = renderHook(() => useForm(initialForm));    
        const {inputChange} = result.current;

        act(() => {
            inputChange({target: {name: 'name', value: newName}});
        });

        expect(result.current.name).toBe(newName);
        expect(result.current.formState.name).toBe(newName);

    });

    test('Debe resetear el formulario', () => { 
        const newName = 'Jimmy';
        const {result} = renderHook(() => useForm(initialForm));    
        const {inputChange,resetForm} = result.current;

        act(() => {
            inputChange({target: {name: 'name', value: newName}});
            resetForm();
        });

        expect(result.current.name).toBe(initialForm.name);
        expect(result.current.formState.name).toBe(initialForm.name);

    });

});