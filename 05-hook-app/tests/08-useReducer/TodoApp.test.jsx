import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/08-useReducer/TodoApp";
import { useTodos } from "../../src/hooks/useTodos";

jest.mock('../../src/hooks/useTodos')

describe('Pruebas en TodoApp', () => { 

    useTodos.mockReturnValue({
        todos: [
            {id:1, description: 'Kill Gus', done: true},
            {id:2, description: 'Kill Mike', done: false},
        ],
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        todosCount: 2,
        pendingTodosCount: 1,
    });
    
    test('Debe mostrar el componente correctamente', () => { 
        
        render(<TodoApp />);
        screen.debug();

        expect(screen.getByText('Kill Gus')).toBeTruthy();
        expect(screen.getByText('Kill Mike')).toBeTruthy();
        expect(screen.getByRole('textbox')).toBeTruthy();

        //console.log(screen.getByRole('textbox').className);

    });

});