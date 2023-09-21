import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../src/pages/_app";

describe("App component", () => {
  it("should render the Step1 component initially", () => {
    const { container } = render(<App />);

    const step1Component = screen.getByTestId("step1");
    expect(step1Component).toBeInTheDocument();
  });

  it("should render the Step2 component when the user clicks the Next Step button", () => {
    const { container } = render(<App />);

    const nextButton = screen.getByText("Next Step");
    nextButton.click();

    const step2Component = screen.getByTestId("step2");
    expect(step2Component).toBeInTheDocument();
  });

  it("should render the Step3 component when the user clicks the Next Step button again", () => {
    const { container } = render(<App />);

    const nextButton = screen.getByText("Next Step");
    nextButton.click();
    nextButton.click();

    const step3Component = screen.getByTestId("step3");
    expect(step3Component).toBeInTheDocument();
  });

  it("should render the Step4 component when the user clicks the Next Step button one more time", () => {
    const { container } = render(<App />);

    const nextButton = screen.getByText("Next Step");
    nextButton.click();
    nextButton.click();
    nextButton.click();

    const step4Component = screen.getByTestId("step4");
    expect(step4Component).toBeInTheDocument();
  });

  it("should disable the Go Back button on the Step1 component", () => {
    const { container } = render(<App />);

    const goBackButton = screen.getByText("Go Back");
    expect(goBackButton).toBeDisabled();
  });

  it("should enable the Go Back button on all other steps", () => {
    const { container } = render(<App />);

    const nextButton = screen.getByText("Next Step");
    nextButton.click();

    const goBackButton = screen.getByText("Go Back");
    expect(goBackButton).toBeEnabled();
  });
});
