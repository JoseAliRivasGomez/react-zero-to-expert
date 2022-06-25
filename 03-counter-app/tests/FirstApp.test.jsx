import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en First App', () => { 

    // test('Debe hacer match con el snapshot', () => { //No hacer snapshot en produccion

    //     const title = 'BCS';
    //     const subtitle = 'BB';
    //     const year = 1999;

    //     const {container} = render(<FirstApp title={title} subtitle={subtitle} year={year} />)

    //     //console.log(container);
    //     expect(container).toMatchSnapshot();

    //  });

     test('Debe mostrar el titulo en un h1', () => { 

        const title = 'BCS';
        const subtitle = 'BB';
        const year = 1999;

        const {container, getByText, getByTestId} = render(<FirstApp title={title} subtitle={subtitle} year={year} />)

        expect(getByText(title)).toBeTruthy(); //que exista el titulo

        expect(getByTestId('test-title').innerHTML).toContain(title); //Que el p contenga ese texto

        // const p = container.querySelector('p');
        // console.log(p.innerHTML);
        // expect(p.innerHTML).toBe('Better Call Saul'); //Que el p tenga ese texto exacto
        // expect(p.innerHTML).toContain('Better Call Saul'); //Que el p contenga ese texto

     });

     test('Debe mostrar el subtitulo enviado por props', () => { 
        
        const title = 'BCS';
        const subtitle = 'BB';
        const year = 1999;

        const {getAllByText} = render(<FirstApp title={title} subtitle={subtitle} year={year} />)

        expect(getAllByText(subtitle).length).toBe(1); //que haya 1 subtitulo

      })

 })