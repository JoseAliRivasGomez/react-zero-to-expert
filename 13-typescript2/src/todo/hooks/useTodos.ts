import { useContext } from 'react';
import { TodoState } from '../interfaces/interfaces';
import { TodoContext } from '../context/TodoContext';


export const useTodos = () => {
    const {todoState, toggleTodo} = useContext(TodoContext);
    const {todos} = todoState;

    return {
        todos: todoState.todos,
        pendingTodos: todos.filter(todo => !todo.completed).length,
        completedTodos: todos.filter(todo => todo.completed).length,
        countTodos: todos.length,
        toggleTodo
    }
}