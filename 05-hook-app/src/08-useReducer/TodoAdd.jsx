import { useForm } from "../hooks/useForm"


export const TodoAdd = ({onNewTodo}) => {

    const {description, inputChange, resetForm} = useForm({
        description: ''
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(description.length <= 1) return;
        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description,
        }

        onNewTodo && onNewTodo(newTodo);
        resetForm();
    }

    return (
        <form onSubmit={onFormSubmit}>
            <input 
                type="text" 
                placeholder="Que hay que hacer?"
                className="form-control"
                name="description"
                value={description}
                onChange={inputChange}
            />
            <button 
                type="submit"
                className="btn btn-outline-primary mt-2"
            >
                Agregar
            </button>
        </form>
    )
}
