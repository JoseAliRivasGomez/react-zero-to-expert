import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"


describe('Pruebas en GifItem', () => { 

    const title = 'Kim'
    const url = 'https://kim.com/'

    test('Debe hacer match con el snapshot', () => { 
        const {container} = render(<GifItem title={title} url={url} />)
        expect(container).toMatchSnapshot();
    })

    test('Debe mostrar la imagen con rl URL y el ALT indicado', () => { 
        render(<GifItem title={title} url={url} />)
        //screen.debug();

        // expect(screen.getByRole('img').alt).toBe(title);
        // expect(screen.getByRole('img').src).toBe(url);
        const {src, alt} = screen.getByRole('img');
        expect(alt).toBe(title);
        expect(src).toBe(url);
    })

    test('Debe mostrar el titulo en el componente', () => { 
        render(<GifItem title={title} url={url} />)
        expect(screen.getByText(title)).toBeTruthy();
     })

 })
