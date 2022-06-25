import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

const [inputValue, setInputValue] = useState('');

    const inputChange = ({target}) => {
        setInputValue(target.value)
    }

    const submitForm = (e) => {
        e.preventDefault();

        if (inputValue.trim().length <= 1) return;
        
        onNewCategory(inputValue.trim())
        setInputValue('');
    }

    return (
        <form onSubmit={submitForm}>
            <input 
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={inputChange}
            />
        </form>
    )
}
