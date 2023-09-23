import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/pages/_app";
import "@testing-library/jest-dom/extend-expect"

describe('App component', () => {
  it('should render the Step1 component when the step is 1', () => {
    render(<App />);

    expect(screen.getByText('YOUR INFO')).toBeInTheDocument();
  });

  it('should render the Step2 component when the step is 2', () => {
    render(<App />);

    const step2Button = screen.getByText('Next Step');
    step2Button.click();

    expect(screen.getByText('SELECT PLAN')).toBeInTheDocument();
  });

  it('should render the Step3 component when the step is 3', () => {
    render(<App />);

    const step2Button = screen.getByText('Next Step');
    step2Button.click();

    const step3Button = screen.getByText('Next Step');
    step3Button.click();

    expect(screen.getByText('ADD-ONS')).toBeInTheDocument();
  });

  it('should render the Step4 component when the step is 4', () => {
    render(<App />);

    const step2Button = screen.getByText('Next Step');
    step2Button.click();

    const step3Button = screen.getByText('Next Step');
    step3Button.click();

    const step4Button = screen.getByText('Next Step');
    step4Button.click();

    expect(screen.getByText('SUMMARY')).toBeInTheDocument();
  });

  it('should disable the "Go Back" button when the step is 1', () => {
    render(<App />);

    const goBackButton = screen.getByText('Go Back');

    expect(goBackButton).toBeDisabled();
  });

  it('should disable the "Go Back" button when the step is 4', () => {
    render(<App />);

    const step2Button = screen.getByText('Next Step');
    step2Button.click();

    const step3Button = screen.getByText('Next Step');
    step3Button.click();

    const step4Button = screen.getByText('Next Step');
    step4Button.click();

    const goBackButton = screen.getByText('Go Back');

    expect(goBackButton).toBeDisabled();
  });

  it('should disable the "Next Step" button when the step is 4', () => {
    render(<App />);

    const step2Button = screen.getByText('Next Step');
    step2Button.click();

    const step3Button = screen.getByText('Next Step');
    step3Button.click();

    const step4Button = screen.getByText('Next Step');
    step4Button.click();

    const nextStepButton = screen.getByText('Next Step');

    expect(nextStepButton).toBeDisabled();
  });
});