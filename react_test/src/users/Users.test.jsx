import {render} from "@testing-library/react";
import Users from "./Users";

jest.mock("axios")
describe("Users test", () => {
    test("test render", () => {
        render(<Users/>);

    });
})