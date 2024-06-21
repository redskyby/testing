import { render, screen } from "@testing-library/react";
import App from "./App";

describe("test app", () => {
    test("renders hello world text", () => {
        render(<App />);
        const helloWorld = screen.queryByText(/hello2/i);
        expect(helloWorld).toBeNull();

    });
});
