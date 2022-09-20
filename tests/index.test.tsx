import Home from "src/pages";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe("Home", ()=>{
    it('renders the NavBar', ()=> {
        render(<Home/>)
        expect(screen.getByTestId("navbar")).toBeInTheDocument();  
    })
})


