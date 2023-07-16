import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"



describe(' Pruebas en <GifItem />', () => { 

       const title = 'Erland';
        const url = 'https://www.erland.com/erland.jpg';


    test('debe de hacer match con el  snapshot', () => {  

     
          
       const {container} = render(<GifItem title={title} url = {url}/>);

       expect(container).toMatchSnapshot();

        
    });

    test('debe de mostrar la imagen con el URL y ALT indicado', () => { 
        render( <GifItem title={title} url={url}/> );
        // screen.debug();
        // console.log(screen.getByRole('img').src);
        // console.log(screen.getByRole('img').alt);
        // console.log(screen.getByRole('img'))

        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const {src, alt} = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
        
     });

     test('debe de mostrar el título en el componente', () => { 
        render(<GifItem title={title} url={url}/>);

        expect(screen.getByText(title)).toBeTruthy();
      });
})