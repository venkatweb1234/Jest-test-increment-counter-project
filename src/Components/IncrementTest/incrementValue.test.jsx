import {fireEvent, render, cleanup} from '@testing-library/react';
import IncrementValue from './incrementValue';
afterEach(cleanup);
it("count starts with 0", () =>{
    const{getByTestId} = render(<IncrementValue />);
    const btn = getByTestId('count');
    expect(btn.textContent).toBe("IncrementVal 0")
   
});

it("Paragraph starts with 0", () =>{
    const{getByTitle} = render(<IncrementValue />);
    const paraGraph= getByTitle("ClickedIncrement");
    expect(paraGraph.textContent).toBe("Clicked times")
});

it('clicking on button increments counter',() =>{
    const{getByTestId,getByTitle} = render(<IncrementValue />);
    const btn = getByTestId('count');
    fireEvent.click(getByTitle("Increment"));
    expect(btn.textContent).toBe("IncrementVal 1")
    fireEvent.click(getByTitle("Increment"));
    expect(btn.textContent).toBe("IncrementVal 2")
})




// describe('clickandIncrementVal', () =>{
//     it("onClick", () =>{
//         const{getByTitle} = render(<IncrementValue />);
//         const btn = getByTitle('IncrementVal');
//         // Find and click +n button    
//         expect(btn.innerHTML).toBe(0);
//         fireEvent.click(btn);
//         expect(btn.innerHTML).toBe(4);
//     })
// })