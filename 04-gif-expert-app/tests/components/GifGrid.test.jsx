import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => { 

    const category = 'Kim Wexler';

    test('Debe mostrar el loading inicialmente', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        
        render(<GifGrid category={category} />);
        //screen.debug();
        expect(screen.getByText('Loading...'));
        expect(screen.getByText(category));

    });

    test('Debe mostrar items cuando se cargan las imagenes mediante el useFetchGifs', () => { 

        const gifs = [
            {
                id: '1',
                title: 'Kim Wexler',
                url: 'https://kim.com'
            },
            {
                id: '2',
                title: 'Jimmy McGill',
                url: 'https://jimmy.com'
            }
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);
        screen.debug();

        expect(screen.getAllByRole('img').length).toBe(2);

    });

 })