import { useReducer } from 'react';
import { TodoState } from '../interfaces/interfaces';
import { TodoContext } from './TodoContext';
import { todoReducer } from './todoReducer';

const INITIAL_STATE: TodoState = {
    todoCount: 4,
    todos: [
        {
            id: '1',
            desc: 'Kill Nacho',
            completed: true
        },
        {
            id: '2',
            desc: 'Kill Kim',
            completed: false
        },
        {
            id: '3',
            desc: 'Kill Howard',
            completed: true
        },
        {
            id: '4',
            desc: 'Kill Lalo',
            completed: true
        },
    ],
    completed: 3,
    pending: 1
}

interface props {
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({children}: props) => {

    const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);

    const toggleTodo = (id: string) => {
        dispatch({type:'toggleTodo', payload:{id}})
    }

    return (
        <TodoContext.Provider value={{
            todoState,
            toggleTodo
        }}>
            {children}
        </TodoContext.Provider>
    )
}
