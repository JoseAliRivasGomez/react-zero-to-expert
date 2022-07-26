import { TodoState, Todo } from '../interfaces/interfaces';

type ActionType = 
    | { type: 'addTodo', payload: Todo }
    | { type: 'toggleTodo', payload: {id: string} };

export const todoReducer = (state: TodoState, action: ActionType): TodoState => {

    switch (action.type) {
        case 'addTodo':
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }

        case 'toggleTodo':
            return {
                ...state,
                todos: state.todos.map(({...todo}) => {
                    if(todo.id === action.payload.id){
                        todo.completed = !todo.completed;
                    }
                    return todo;
                })
            }

        default:
            return state;
    }
    
}