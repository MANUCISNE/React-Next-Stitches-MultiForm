import React from "react";
import { render, screen } from "@testing-library/react";
import Step2 from "../src/pages/step2";
import "@testing-library/jest-dom/extend-expect"

test("Step2 component", async () => {
  it("should render the three plans", () => {
    const { container } = render(<Step2 />);

    const plans = screen.getAllByRole("listitem");
    expect(plans.length).toBe(3);
  });

  it("should select the first plan by default", async () => {
    const { container } = render(<Step2 />);

    const firstPlan = screen.getByRole("listitem", { selected: true });
    expect(firstPlan.textContent).toContain("Arcade");
  });

  it("should select the plan when the user clicks on it", () => {
    const { container } = render(<Step2 />);

    const secondPlan = screen.getAllByRole("listitem")[1];
    secondPlan.click();

    const selectedPlan = screen.getByRole("listitem", { selected: true });
    expect(selectedPlan.textContent).toContain("Advanced");
  });

  it("should disable the Next Step button if the user has not selected a plan", async () => {
    const { container } = render(<Step2 />);
  });

  it("should enable the Next Step button if the user has selected a plan", async () => {
    const { container } = render(<Step2 />);

    const firstPlan = screen.getByRole("listitem", { selected: true });
    firstPlan.click();
  });
});

