import React from "react";
import Step2 from "@/src/pages/step2";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

jest.mock("../src/contexts/FormStepContext", () => ({
  useGlobalContext: jest.fn(() => ({
    setPlansMonth: jest.fn(),
    setPlansYearly: jest.fn(),
    setIsChecked: jest.fn(),
  })),
}));

describe("Step2 component", () => {
  it("should render the form title and description", () => {
    render(<Step2 />);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(
      screen.queryByRole("listitem")
    ).toBeInTheDocument();
  });

  it("should render the monthly plans", () => {
    render(<Step2 />);

    const monthlyPlans = screen.getAllByRole("listitem");
    expect(monthlyPlans.length).toBe(1);
  });

  it("should render the yearly plans when the switch is toggled on", () => {
    render(<Step2 />);

    const switchButton = screen.getByRole("switch");
    switchButton.click();

    const yearlyPlans = screen.getAllByRole("listitem");
    expect(yearlyPlans.length).toBe(1);
  });

  it("should select the monthly plan by default", () => {
    render(<Step2 />);

    const firstMonthlyPlan = screen.queryByRole("list", { name: "Arcade" });
    expect(firstMonthlyPlan?.classList.contains("selected"))
  });

  it("should select the yearly plan when the switch is toggled on", () => {
    render(<Step2 />);

    const switchButton = screen.getByRole("switch");
    switchButton.click();

    const firstYearlyPlan = screen.queryByRole("list", { name: "Arcade" });
    expect(firstYearlyPlan?.classList.contains("selected"));
  });
});
