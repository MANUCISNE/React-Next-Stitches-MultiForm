import React from "react";
import { render, screen } from "@testing-library/react";
import Step3 from "../src/pages/step3";
import '@testing-library/jest-dom'

jest.mock("../src/contexts/FormStepContext", () => ({
  useGlobalContext: jest.fn(() => ({
    setAdditional: jest.fn(),
  })),
}));

describe("Step3 component", () => {
  it("should render the three add-ons", () => {
    render(<Step3 />);

    const addOns = screen.getAllByRole("listadd");
    expect(addOns.length).toBe(3);
  });

  // it("should check the first add-on by default", () => {
  //   const { container } = render(<Step3 />);

  //   const firstAddOn = screen.getByRole("checkbox", { checked: true });
  //   expect(firstAddOn.textContent).toContain("Online service");
  // });

  // it("should check the add-on when the user clicks on it", () => {
  //   const { container } = render(<Step3 />);

  //   const secondAddOn = screen.getAllByRole("checkbox")[1];
  //   secondAddOn.click();

  //   const selectedAddOn = screen.getByRole("checkbox", { checked: true });
  //   expect(selectedAddOn.textContent).toContain("Large storage");
  // });

});
