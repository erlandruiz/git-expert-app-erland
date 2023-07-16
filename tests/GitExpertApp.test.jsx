import { render, screen } from "@testing-library/react"
import { GitExpertApp } from "../src/GitExpertApp"


describe('Primeras pruebas en componente <GitExpertApp/>', () => { 
    test('deberia hacer match con el snapsshot', () => { 
       const{container} = render(<GitExpertApp/>);
       screen.debug();
        expect(container).toMatchSnapshot();
        
    });

    
 });