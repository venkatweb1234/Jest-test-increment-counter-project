import {render, fireEvent} from "@testing-library/react";

import ButtonJs from './Button';

it("CheckButtonRender", () =>{
   const {queryByTitle} = render(<ButtonJs />);
   const btn = queryByTitle("ClickHandler");
   expect(btn).toBeTruthy();
});

describe("clickButton", () =>{
    it("onClick",() =>{
        const {queryByTitle} = render(<ButtonJs />);
        const btn = queryByTitle("ClickHandler");
        
        expect(btn.innerHTML).toBe("You clicked Here");
        fireEvent.click(btn);
        expect(btn.innerHTML).toBe("already Clicked");
    })
})