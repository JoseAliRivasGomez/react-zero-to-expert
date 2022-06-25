import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en First App', () => { 

   const title = 'BCS';
   const subtitle = 'BB';
   const year = 1999;

    test('Debe hacer match con el snapshot', () => { //No hacer snapshot en produccion
        const {container} = render(<FirstApp title={title} subtitle={subtitle} year={year} />)
        expect(container).toMatchSnapshot();
     });

     test('Debe revisar que exista el titulo', () => { 
        render(<FirstApp title={title} subtitle={subtitle} year={year} />)
        screen.debug();
        expect(screen.getByText(title)).toBeTruthy(); //que exista el titulo
     });

     test('Debe mostrar el titulo en un h1', () => { 
        render(<FirstApp title={title} subtitle={subtitle} year={year} />)
        expect(screen.getByRole('heading', {level: 1}).innerHTML).toContain(title); 
      });

      test('Debe mostrar el subtitulo enviado por props', () => { 
         render(<FirstApp title={title} subtitle={subtitle} year={year} />)
         expect(screen.getAllByText(subtitle).length).toBe(1); //que haya 1 subtitulo
 
       });

 })