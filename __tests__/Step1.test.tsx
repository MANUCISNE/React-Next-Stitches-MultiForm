import React from 'react';
import Step1 from "@/src/pages/step1";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

describe("Step1 component", () => {
  it("should render the form title and description", () => {
    render(<Step1 />);
    expect(screen.getByText("Personal info")).toBeInTheDocument();
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Email Address")).toBeInTheDocument();
    expect(screen.getByText("Phone Number")).toBeInTheDocument();
  });

  it("should validate the name input field", () => {
    render(<Step1 />);

    const nameInput = screen.getByPlaceholderText("Username");
    (nameInput as HTMLInputElement).value = "123";
    nameInput.blur();

    expect(screen.queryByText("Only letters is valid"))
  });

  it("should validate the email input field", () => {
    render(<Step1 />);

    const emailInput = screen.getByPlaceholderText("Email");
    (emailInput as HTMLInputElement).value = "invalid@email";
    emailInput.blur();

    expect(screen.queryByText("The email is invalid"))
  });

  it("should validate the phone number input field", () => {
    render(<Step1 />);

    const phoneNumberInput = screen.getByPlaceholderText("(DD)999999999");
    (phoneNumberInput as HTMLInputElement).value = "123123";
    phoneNumberInput.blur();

    expect(screen.queryByText("Only this format is valid: (DD)999999999"))
  });
});
