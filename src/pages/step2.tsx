import React, { useState } from 'react';
import Link from 'next/link';

export default function Step2() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const plans = [
    {
      id: 'plan1',
      title: 'Arcade',
      price: '$9/mo',
    },
    {
      id: 'plan2',
      title: 'Advanced',
      price: '$12/mo',
    },
    {
      id: 'plan3',
      title: 'Pro',
      price: '$15/mo',
    },
  ];

  return (
    <div>
      <h2>Etapa 2: Seleção de Plano</h2>
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`plan ${selectedPlan === plan.id ? 'selected' : ''}`}
          onClick={() => setSelectedPlan(plan.id)}
        >
          <h3>{plan.title}</h3>
          <p>{plan.price}</p>
        </div>
      ))}
      {selectedPlan && (
        <button>
          <Link href="/step3">Next Step</Link>
        </button>
      )}
      <br />
      <Link href="/step1">Go Back</Link>
    </div>
  );
};

