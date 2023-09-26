import React from "react";
import Step2 from "@/src/pages/step2";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useGlobalContext } from "@/src/contexts/FormStepContext";

/*describe("handleSwitchChange", () => {
  it("should render the component", () => {
    render(<Step2 />);
    expect(screen.getAllByTestId("airplane-mode"));
  });

  // Set the initial isChecked state variable value.
  /*const isChecked = true;

  // Call the handleSwitchChange function.
  handleSwitchChange();

  // Check that the isChecked state variable value was set to the opposite of its initial value.
  expect(isChecked).toBeFalsy();

  // Get the package item from localStorage.
  const packageItem = localStorage.getItem('package');

  // Parse the package item from JSON.
  const packageObject = JSON.parse(packageItem);

  // Check that the package property of the package object is set to the new isChecked value.
  expect(packageObject.package).toBeFalsy();
})*/

jest.mock("../src/contexts/FormStepContext", () => ({
  useGlobalContext: jest.fn(() => ({
    setPlansMonth: jest.fn(),
    setPlansYearly: jest.fn(),
  })),
}));

describe("Step2 component", () => {
  it("should render the form title and description", () => {
    render(<Step2 />);

    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(
      screen.getByText("You have the option of monthly or yearly billing.")
    ).toBeInTheDocument();
  });

  // it("should render the monthly plans", () => {
  //   render(<Step2 />);

  //   const monthlyPlans = screen.getAllByRole("listitem");
  //   expect(monthlyPlans.length).toBe(3);
  // });

  // it("should render the yearly plans when the switch is toggled on", () => {
  //   render(<Step2 />);

  //   const switchButton = screen.getByRole("switch");
  //   switchButton.click();

  //   const yearlyPlans = screen.getAllByRole("listitem");
  //   expect(yearlyPlans.length).toBe(3);
  // });

  // it("should select the monthly plan by default", () => {
  //   render(<Step2 />);

  //   const firstMonthlyPlan = screen.getByRole("listitem", { name: "Arcade" });
  //   expect(firstMonthlyPlan.classList.contains("selected")).toBe(true);
  // });

  // it("should select the yearly plan when the switch is toggled on", () => {
  //   render(<Step2 />);

  //   const switchButton = screen.getByRole("switch");
  //   switchButton.click();

  //   const firstYearlyPlan = screen.getByRole("listitem", { name: "Arcade" });
  //   expect(firstYearlyPlan.classList.contains("selected")).toBe(true);
  // });

  // it("should call the `handleSelectPlan` prop when a plan is selected", () => {
  //   const handleSelectPlanMock = jest.fn();

  //   render(<Step2 handleSelectPlan={handleSelectPlanMock} />);

  //   const firstMonthlyPlan = screen.getByRole("listitem", { name: "Arcade" });
  //   firstMonthlyPlan.click();

  //   expect(handleSelectPlanMock).toHaveBeenCalledWith("plan1");
  // });
});
