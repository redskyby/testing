import { render, screen } from "@testing-library/react";
import App from "./App";

describe("test app", () => {
    test("renders hello world text", async () => {
        render(<App />);
        const helloWorld = screen.queryByText(/hello2/i);
        expect(helloWorld).toBeNull();
    });

    test("check async", async () => {
        render(<App />);
        const helloWorld = await screen.findByText(/data/i);
        expect(helloWorld).toBeInTheDocument();
    });
});
