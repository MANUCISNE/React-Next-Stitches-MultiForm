import React from "react";
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Step4 from "@/src/pages/step4";

jest.mock("../src/contexts/FormStepContext", () => ({
  useGlobalContext: jest.fn(() => ({
    setAdditional: jest.fn(),
    setPlansMonth: jest.fn(),
    setPlansYearly: jest.fn(),
  })),
}));

describe("Step3 component", () => {
  it("should render the three add-ons", () => {
    render(<Step4 />);

    expect(screen.getByText('$soma')).toBeInTheDocument();

    // Verifique se o total do plano é renderizado
    expect(screen.getByText('${soma}/{typePlan ? "yr" : "mo"}')).toBeInTheDocument();

    // Verifique se o botão `Confirm` é renderizado
    expect(screen.getByText('Confirm')).toBeInTheDocument();
  });

  it('should render the correct data', () => {
    // Simule os dados que serão passados para o componente
    const data = {
      title: 'My Plan',
      plan: '(Month)',
      price: 100,
    };
  
    render(<Step4 data={data} />);
  
    // Verifique se o título do plano é renderizado corretamente
    expect(screen.getByText('My Plan (Month)')).toBeInTheDocument();
  
    // Verifique se o preço do plano é renderizado corretamente
    expect(screen.getByText('$100')).toBeInTheDocument();
  });
});