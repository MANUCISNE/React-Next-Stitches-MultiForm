import React, { useState } from 'react';
import Link from 'next/link';
import { HomeContainer } from '../styles/pages/home';

export default function Home() {
  const [currentStep, setCurrentStep] = useState('1');

  const Sidebar = ({ currentStep }: any) => {
    const steps = ['1', '2', '3', '4'];
  
    return (
      <div>
        {steps.map((step) => (
          <div
            key={step}
            className={`step ${currentStep === step ? 'active' : ''}`}
          >
            {step}
          </div>
        ))}
      </div>
    );
  };

  return (
    <HomeContainer>
      <Sidebar currentStep={currentStep} />
      {currentStep === '1' && <Link href="/step1">Ir para a Etapa 1</Link>}
      {currentStep === '2' && <Link href="/step2">Ir para a Etapa 2</Link>}
      {currentStep === '3' && <Link href="/step3">Ir para a Etapa 3</Link>}
      {currentStep === '4' && <Link href="/step4">Ir para a Etapa 4</Link>}
    </HomeContainer>
  );
};
