import { fireEvent, render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"


describe('Pruebas en el CounterApp', () => { 

    const value = 10;

    test('Debe hacer match con el snapshot', () => { 
        const {container} = render(<CounterApp value={value}/>);
        expect(container).toMatchSnapshot();
     })

     test('Debe mostrar el valor inicial de 100', () => { 
        render(<CounterApp value={100}/>);
        expect(screen.getByText('100')).toBeTruthy();
        expect(screen.getByRole('heading',{level:2}).innerHTML).toContain('100');
     })

     test('Debe incrementar con el boton +1', () => { 
        render(<CounterApp value={value}/>);
        fireEvent.click(screen.getByText('+1'))
        expect(screen.getByText('11')).toBeTruthy();
     })

     test('Debe decrementar con el boton -1', () => { 
        render(<CounterApp value={value}/>);
        fireEvent.click(screen.getByText('-1'))
        screen.debug();
        expect(screen.getByText('9')).toBeTruthy();
     })

     test('Debe funcionar el boton de reset', () => { 
        render(<CounterApp value={value}/>);
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByText('+1'))
        fireEvent.click(screen.getByRole('button', {name: 'btn-reset'}))

        screen.debug();
        expect(screen.getByText(value)).toBeTruthy();
     })
 })