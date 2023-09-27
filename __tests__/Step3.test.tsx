import React from "react";
import Step3 from "../src/pages/step3";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("../src/contexts/FormStepContext", () => ({
  useGlobalContext: jest.fn(() => ({
    setAdditional: jest.fn(),
    setPlansMonth: jest.fn(),
    setPlansYearly: jest.fn(),
  })),
}));

describe('Step3 component', () => {
  it('should render the correct add-on options based on the packageStorage state', () => {
    // Render the component with packageStorage set to true
    const handleNextMock = jest.fn();
    render(<Step3 packageStorage={true} handleNext={handleNextMock} />);

    // Expect to see the yearly add-on options
    expect(screen.getByText('Online service - $10/yr')).toBeInTheDocument();
    expect(screen.getByText('Advanced - $20/yr')).toBeInTheDocument();
    expect(screen.getByText('Pro - $20/yr')).toBeInTheDocument();

    // Render the component with packageStorage set to false
    render(<Step3 packageStorage={false} />);

    // Expect to see the monthly add-on options
    expect(screen.getByText('Online service - $1/mo')).toBeInTheDocument();
    expect(screen.getByText('Advanced - $2/mo')).toBeInTheDocument();
    expect(screen.getByText('Pro - $2/mo')).toBeInTheDocument();
  });

  it('should call the handleCheckboxChange function when an add-on checkbox is clicked', () => {
    const handleCheckboxChangeMock = jest.fn();
    render(<Step3 handleCheckboxChange={handleCheckboxChangeMock} />);

    // Click the checkbox for the first add-on
    screen.getByText('Online service').click();

    // Expect the handleCheckboxChange function to have been called with the correct id
    expect(handleCheckboxChangeMock).toHaveBeenCalled();
  });
});
