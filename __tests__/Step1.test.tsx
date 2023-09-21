import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Step1 from "../src/pages/step1";


describe("Step1 component", () => {
  it("should render the form with the correct labels", () => {
    const { container } = render(<Step1 />);

    const form = screen.getByRole("form");
    expect(form).toBeInTheDocument();

    const usernameLabel = screen.getByText("Name");
    expect(usernameLabel).toBeInTheDocument();

    const emailLabel = screen.getByText("Email Adress");
    expect(emailLabel).toBeInTheDocument();

    const phoneLabel = screen.getByText("Phone Number");
    expect(phoneLabel).toBeInTheDocument();
  });

  it("should validate the form correctly", () => {
    const { container } = render(<Step1 />);

    const form = screen.getByRole("form");
    const usernameInput = screen.getByPlaceholderText("Username") as HTMLInputElement;
    const emailInput = screen.getByPlaceholderText("Email") as HTMLInputElement;
    const phoneInput = screen.getByPlaceholderText("(DD)999999999") as HTMLInputElement;

    // Initially, the form should be invalid
    expect(form).toHaveClass("invalid");

    // Fill in the form with valid data
    usernameInput.value = "John Doe";
    emailInput.value = "john.doe@example.com";
    phoneInput.value = "(11)999999999";

    // Simulate the user submitting the form
    form.dispatchEvent(new Event("submit"));

    // Now, the form should be valid
    expect(form).not.toHaveClass("invalid");
  });
});

