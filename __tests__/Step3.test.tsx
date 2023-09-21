import React from "react";
import { render, screen } from "@testing-library/react";
import Step3 from "../src/pages/step3";

describe("Step3 component", () => {
  it("should render the three add-ons", () => {
    const { container } = render(<Step3 />);

    const addOns = screen.getAllByRole("checkbox");
    expect(addOns.length).toBe(3);
  });

  it("should check the first add-on by default", () => {
    const { container } = render(<Step3 />);

    const firstAddOn = screen.getByRole("checkbox", { checked: true });
    expect(firstAddOn.textContent).toContain("Online service");
  });

  it("should check the add-on when the user clicks on it", () => {
    const { container } = render(<Step3 />);

    const secondAddOn = screen.getAllByRole("checkbox")[1];
    secondAddOn.click();

    const selectedAddOn = screen.getByRole("checkbox", { checked: true });
    expect(selectedAddOn.textContent).toContain("Large storage");
  });

  it("should disable the Next Step button if the user has not selected any add-ons", () => {
    const { container } = render(<Step3 />);

    const nextButton = screen.getByText("Next Step");
    expect(nextButton).toBeDisabled();
  });

  it("should enable the Next Step button if the user has selected at least one add-on", () => {
    const { container } = render(<Step3 />);

    const firstAddOn = screen.getByRole("checkbox", { checked: true });
    firstAddOn.click();

    const nextButton = screen.getByText("Next Step");
    expect(nextButton).toBeEnabled();
  });
});
