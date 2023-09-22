import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "../src/pages/_app";

describe('App', () => {
  it('should render the Step1 component when the step variable is 1', () => {
    render(<App />);

    const step1Component = screen.getByTestId('step-1');
    expect(step1Component).toBeInTheDocument();
  });

  it('should render the Step2 component when the step variable is 2', () => {
    render(<App />);

    const step2Component = screen.getByTestId('step-2');
    expect(step2Component).toBeInTheDocument();
  });
});

describe('App', () => {
  it('should render the Step2 component when the user clicks the Next button from Step1', () => {
    render(<App />);

    const nextButton = screen.getByText('Next Step');
    nextButton.click();

    const step2Component = screen.getByTestId('step-2');
    expect(step2Component).toBeInTheDocument();
  });
});

describe('App', () => {
  it('should render the Step1 component when the user clicks the Go Back button from Step2', () => {
    render(<App />);

    const nextButton = screen.getByText('Next Step');
    nextButton.click();

    const goBackButton = screen.getByText('Go Back');
    goBackButton.click();

    const step1Component = screen.getByTestId('step-1');
    expect(step1Component).toBeInTheDocument();
  });
});

describe('App', () => {
  it('should not render the Step2 component when the user clicks the Next button from Step1 without filling in all the required fields', () => {
    render(<App />);

    const nextButton = screen.getByText('Next Step');
    nextButton.click();

    const step2Component = screen.getByTestId('step-2');
    expect(step2Component).not.toBeInTheDocument();
  });
});
