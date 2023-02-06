import { render, screen } from "@testing-library/react";
import AddData from "../pages/AddData";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { renderWithProviders } from "../../test-utils";
import userEvent from "@testing-library/user-event";


describe("testing component for Add Data Page", () => {
  test("renders input component", () => {
   renderWithProviders(<AddData />, {store: store})
    const inputElement = screen.getByPlaceholderText(/enter your name/i);
    expect(inputElement).toBeInTheDocument();
  });

  test("render button component", () => {
   renderWithProviders(<AddData />, {store: store})
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument();
  });

  it("match value when user type in the form", () => {
    renderWithProviders(<AddData />, { store: store });
    const inputElement = screen.getByPlaceholderText(/Enter your name.../i);
    userEvent.type(inputElement, "Adam");
    expect(inputElement.value).toBe("Adam");
  });

});
