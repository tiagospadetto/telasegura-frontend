import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import SecureScreen from "./SecureScreen";
import '@testing-library/jest-dom';

jest.mock("./SecureScreen.css", () => ({}));

describe("SecureScreen component", () => {
  it("renders secure screen text correctly", () => {
    render(
      <MemoryRouter>
        <SecureScreen socket={null} />
      </MemoryRouter>
    );

    const secureText = screen.getByText("Você está acessando a tela segura");
    expect(secureText).toBeInTheDocument();

    const button = screen.getByRole("button", { name: "Sair" });
    expect(button).toBeInTheDocument();
  });

  it("calls liberaTela when 'Sair' button is clicked", () => {
    const mockSocket = {
      emit: jest.fn(),
    };

    render(
      <MemoryRouter>
        <SecureScreen socket={mockSocket} />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: "Sair" });
    fireEvent.click(button);

    expect(mockSocket.emit).toHaveBeenCalledWith("liberatela", undefined);
  });
});
