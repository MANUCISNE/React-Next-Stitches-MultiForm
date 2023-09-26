import React from "react";
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import Step4 from "@/src/pages/step4";

describe('should render all content', () => {
    const { getByText } = render(<Step4 />);

    expect(getByText('Finishing up')).toBeInTheDocument();

    // Verifique se o preço do plano é renderizado
    expect(getByText('$soma')).toBeInTheDocument();
  
    // Verifique se o total do plano é renderizado
    expect(getByText('${soma}/{typePlan ? "yr" : "mo"}')).toBeInTheDocument();
  
    // Verifique se o botão `Confirm` é renderizado
    expect(getByText('Confirm')).toBeInTheDocument();
  });
