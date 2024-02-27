import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BlockScreen from "./BlockScreen";
import '@testing-library/jest-dom';

describe("BlockScreen component", () => {
  it("renders block screen text correctly", () => {
    render(
      <MemoryRouter>
        <BlockScreen socket={null} />
      </MemoryRouter>
    );

    const blockText = screen.getByText(
      "Desculpe! Existe outro usuário acessando a Tela Segura"
    );
    expect(blockText).toBeInTheDocument();

    const waitText = screen.getByText(
      "Aguarde nessa tela, você será redirecionado assim que ela estiver livre"
    );
    expect(waitText).toBeInTheDocument();

    const backButton = screen.getByRole("button", { name: "Voltar para home" });
    expect(backButton).toBeInTheDocument();
  });
});
