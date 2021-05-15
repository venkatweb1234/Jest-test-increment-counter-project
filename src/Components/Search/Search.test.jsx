import {render, fireEvent} from "@testing-library/react";
import SearchJs from "./Search";

//import se from './Search'

it('Search Text Focus', () =>{
    const {queryByTitle} = render(<SearchJs />);
    const input = queryByTitle("Search Click");
    expect(input).toBeTruthy();
});

describe("changeInInput", () =>{
    it("onChange", () =>{
        const {queryByTitle} = render(<SearchJs />);
        const input = queryByTitle("Search Click");
        fireEvent.change(input, {target:{value: "testValue"}});
        expect(input.value).toBe("testValue");
    })
})