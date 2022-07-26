import { Todo } from '../interfaces/interfaces';
import { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import { useTodos } from '../hooks/useTodos';

interface props {
    todo: Todo
}

export const TodoItem = ({todo}: props) => {

    //const {toggleTodo} = useContext(TodoContext)
    const {toggleTodo} = useTodos();

    // const handleDoubleClick = () => {
    //     //console.log('handleDoubleClick: ', todo.desc);
    //     toggleTodo(todo.id);
    // }

    return (
        <li style={{
            cursor: 'pointer',
            textDecoration: todo.completed ? 'line-through' : ''
        }} onDoubleClick={() => toggleTodo(todo.id)}>
            {todo.desc}
        </li>
    )
}
