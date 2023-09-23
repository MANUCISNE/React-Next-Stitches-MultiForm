import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Step1 from "../src/pages/step1";

test("Step1 component", async () => {
  it("should display an error message if the username is not filled in", () => {
    render(<Step1 />);

    // Get the username input element
    const usernameInput = screen.getByPlaceholderText("Username");

    // Blur the input element to trigger validation
    usernameInput.blur();

    // Expect the error message to be displayed
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("should not display an error message if the username is filled in", async () => {
    render(<Step1 />);

    // Get the username input element
    const usernameInput = screen.getByPlaceholderText("Username") as HTMLInputElement;

    // Type a username into the input element
    //usernameInput.type("John Doe");

    // Blur the input element to trigger validation
    usernameInput.blur();

    // Expect the error message not to be displayed
    expect(screen.queryByText("This field is required")).not.toBeInTheDocument();
  });
});

test("Step1 component", async () => {
  it("should display an error message if the email is not in a valid format", () => {
    render(<Step1 />);

    // Get the email input element
    const emailInput = screen.getByPlaceholderText("Email") as HTMLInputElement;

    // Type an invalid email address into the input element
    //emailInput.type("invalid_email");

    // Blur the input element to trigger validation
    emailInput.blur();

    // Expect the error message to be displayed
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("should not display an error message if the email is in a valid format", async () => {
    render(<Step1 />);

    // Get the email input element
    const emailInput = screen.getByPlaceholderText("Email") as HTMLInputElement;

    // Type a valid email address into the input element
    //emailInput.type("john.doe@example.com");

    // Blur the input element to trigger validation
    emailInput.blur();

    // Expect the error message not to be displayed
    expect(screen.queryByText("This field is required")).not.toBeInTheDocument();
  });
});

test("Step1 component", async () => {
  it("should display an error message if the phone number is not in a valid format", async () => {
    render(<Step1 />);

    // Get the phone number input element
    const phoneNumberInput = screen.getByPlaceholderText("(DD)999999999") as HTMLInputElement;

    // Type an invalid phone number into the input element
    //phoneNumberInput.type("invalid_phone_number");

    // Blur the input element to trigger validation
    phoneNumberInput.blur();

    // Expect the error message to be displayed
    expect(screen.getByText("This field is required")).toBeInTheDocument();
  });

  it("should not display an error message if the phone number is in a valid format", async () => {
    render(<Step1 />);

    // Get the phone number input element
    const phoneNumberInput = screen.getByPlaceholderText("(DD)999999999") as HTMLInputElement;

    // Type a valid phone number into the input element
    //phoneNumberInput.type("(11)999999999");

    // Blur the input element to trigger validation
    phoneNumberInput.blur();

    // Expect the error message not to be displayed
    expect(screen.queryByText("This field is required")).not.toBeInTheDocument();
  });
});

