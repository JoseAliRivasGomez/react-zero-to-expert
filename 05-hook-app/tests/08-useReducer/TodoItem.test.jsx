import { render, screen, fireEvent } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en TodoItem', () => { 

    const todo = {
        id: 1,
        description: 'Kill Mike',
        done: false
    }
    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach(() => jest.clearAllMocks());
    
    test('Debe mostrar el Todo Pendiente de completar', () => { 
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />);

        const liElement = screen.getByRole('listitem');
        //console.log(liElement.innerHTML);

        //screen.debug();

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');
        
        const spanElement = screen.getByLabelText('span');

        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.className).not.toContain('text-decoration-line-through');
        
    });

    test('Debe mostrar el Todo completado', () => { 
        todo.done = true;
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />);
        
        const spanElement = screen.getByLabelText('span');

        expect(spanElement.className).toContain('text-decoration-line-through');
        
    });

    test('El span debe llamar el ToggleTodo cuando se hace click', () => { 
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />);

        const spanElement = screen.getByLabelText('span');

        fireEvent.click(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);

    });

    test('El boton debe llamar el DeleteTodo cuando se hace click', () => { 
        render(<TodoItem todo={todo} onDeleteTodo={onDeleteTodoMock} onToggleTodo={onToggleTodoMock} />);

        const buttonElement = screen.getByRole('button');

        fireEvent.click(buttonElement);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);

    });
 
});