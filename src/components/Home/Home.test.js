import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; 
import Home from "./Home"; 
import '@testing-library/jest-dom';


jest.mock("../../config/Constants", () => ({
  SOCKET_URL: "http://localhost:8080", 
}));

describe("Home component", () => {
  it("renders 'Bem vindo!' text correctly", () => {
    render(
      <MemoryRouter> {/* Wrap Home component with MemoryRouter */}
        <Home setSocket={jest.fn()} />
      </MemoryRouter>
    );

    const welcomeText = screen.getByText("Bem vindo!");
    expect(welcomeText).toBeInTheDocument();
  });
});
