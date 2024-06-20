import { render, screen } from "@testing-library/react";
import App from "./App";

describe("test app" , ()=>{
    test("renders hello world text", () => {
        render(<App />);
        const helloWorld = screen.getByText(/hello world/i);
        expect(helloWorld).toBeInTheDocument();
        screen.debug();
    });
})

