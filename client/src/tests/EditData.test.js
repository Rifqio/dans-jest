import { render, screen } from "@testing-library/react";
import EditData from "../pages/EditData";
import { MemoryRouter } from "react-router-dom";
import { renderWithProviders } from "../../test-utils";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import userEvent from "@testing-library/user-event";

describe("check the component on edit data page", () => {
  it("render the form", () => {
    renderWithProviders(<EditData />, { store: store });
    const inputElement = screen.getByPlaceholderText(/Enter your name.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it("render the submit button", () => {
    renderWithProviders(<EditData />, { store: store });
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("match value when user type in the form", () => {
    renderWithProviders(<EditData />, { store: store });
    const inputElement = screen.getByPlaceholderText(/Enter your name.../i);
    userEvent.type(inputElement, "Hello");
    expect(inputElement.value).toBe("Hello");
  });
});
