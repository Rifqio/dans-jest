import { render, screen } from "@testing-library/react";
import { renderWithProviders } from "../../test-utils";
import UserList from "../pages/UserList";
import { store } from "../redux/store";

describe("testing the user list page", () => {
  it("should render the table", () => {
    renderWithProviders(<UserList />, { store: store });
    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeInTheDocument();
  });

  it("should render the button", () => {
    renderWithProviders(<UserList  />, { store: store });
    const buttonElement = screen.getByRole("button", { name: "Edit" });
    expect(buttonElement).toBeInTheDocument();
  });
  
  it('should render the link to add new data', () => {
    renderWithProviders(<UserList />, { store: store });
    const linkElement = screen.getByRole("link", {name: /add new data/i})
    expect(linkElement).toBeInTheDocument();
  });
  
});
