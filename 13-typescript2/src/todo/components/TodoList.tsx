import { useContext } from "react"
import { TodoContext } from "../context/TodoContext";
import { TodoItem } from './TodoItem';
import { useTodos } from '../hooks/useTodos';

export const TodoList = () => {

    // const {todoState} = useContext(TodoContext);
    // //console.log(todoState);
    // const {todos} = todoState;
    const {todos} = useTodos();
    

    return (
        <ul>
            {
                todos.map(todo => <TodoItem key={todo.id} todo={todo} /> )
            }
        </ul>
    )
}
