import { ChangeEvent, useState } from 'react';

//export function useForm<T>(initialState: T){
export const useForm = <T extends Object>(initialState: T) => {

    const [formulario, setFormulario] = useState(initialState);

    const onInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = target;
        //console.log(name, value);
        setFormulario({
            ...formulario,
            [name]: value
        })
        
    }

    return {
        ...formulario,
        formulario,
        onInputChange
    }
}
