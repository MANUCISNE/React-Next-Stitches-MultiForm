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
  test('renders yearly add-ons if package is true', () => {
    const { container } = render(<Step3 package={true} />);

    const yearlyAddons = screen.getByRole('listadd');

    expect(yearlyAddons).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  test('renders monthly add-ons if package is false', () => {
    const { container } = render(<Step3 package={false} />);

    const monthlyAddons = screen.getByRole('listitemcheckboxMO');

    expect(monthlyAddons).toBeInTheDocument()
    expect(container).toMatchSnapshot();
  });
});
