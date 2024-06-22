import {render, screen, fireEvent} from "@testing-library/react";
import App from "./App";

describe("test app", () => {
    test("renders hello world text", async () => {
        render(<App/>);
        const helloWorld = screen.queryByText(/hello2/i);
        expect(helloWorld).toBeNull();
    });

    test("check async", async () => {
        render(<App/>);
        const helloWorld = await screen.findByText(/data/i);
        expect(helloWorld).toBeInTheDocument();
    });

    test("check click", () => {
        render(<App/>);
        const btn = screen.getByTestId("toggle-btn");
        expect(screen.queryByTestId("toggle-elem")).toBeNull();
        fireEvent.click(btn);
        expect(screen.queryByTestId("toggle-elem")).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.queryByTestId("toggle-elem")).toBeNull();
    });

    test("input check", () => {
        render(<App/>);
        const input = screen.getByPlaceholderText(/input value/i);
        expect(screen.queryByTestId("value-elem")).toContainHTML("");
        fireEvent.input(input , {
            target : {value : "1231233"}
        });
        expect(screen.queryByTestId("value-elem")).toContainHTML("1231233");
    });
});
