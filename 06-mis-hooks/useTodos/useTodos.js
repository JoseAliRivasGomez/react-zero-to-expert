import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";

const initialState = [];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = () => {
  
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos));
    
    }, [todos])
    

    const handleNewTodo = (todo) => {
        //console.log(todo);
        const addTodoAction = {
            type: 'Add Todo',
            payload: todo,
        }
        dispatch(addTodoAction);
    }

    const handleDeleteTodo = (id) => {
        const deleteTodoAction = {
            type: 'Delete Todo',
            payload: id,
        }
        dispatch(deleteTodoAction);
    }

    const handleToggleTodo = (id) => {
        const toggleTodoAction = {
            type: 'Toggle Todo',
            payload: id,
        }
        dispatch(toggleTodoAction);
    }

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
    }
    
}
