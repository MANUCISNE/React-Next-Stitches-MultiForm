import React, { useState } from 'react';
import Image from "next/image";

import { DivTeste, Flex, FormDiv, Label, SwitchBox, SwitchRoot, SwitchThumb, WrapperContainerStep2 } from '../styles/pages/step2';

export default function Step2() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [mode, setMode] = useState("monthly");
  const plans = [
    {
      id: 'plan1',
      title: 'Arcade',
      price: '$9/mo',
      img: '/images/icon-arcade.svg',
    },
    {
      id: 'plan2',
      title: 'Advanced',
      price: '$12/mo',
      img: '/images/icon-advanced.svg',
    },
    {
      id: 'plan3',
      title: 'Pro',
      price: '$15/mo',
      img: '/images/icon-pro.svg',
    },
  ];

  return (
    <WrapperContainerStep2>
      <FormDiv> 
      <h2>Select your plan</h2>
      <p>You have the option of monthly or yearly biling.</p>
      {plans.map((plan) => (
        <DivTeste
          key={plan.id}
          className={`plan ${selectedPlan === plan.id ? 'selected' : ''}`}
          onClick={() => setSelectedPlan(plan.id)}
        >
          <Image src={plan.img} alt={''} width={35} height={35}/>
          <h3>{plan.title}</h3>
          <p>{plan.price}</p>
        </DivTeste>
      ))}
        
        <SwitchBox>
          <Flex css={{ alignItems: 'center', color: '$marineBlue' }}>
            <Label htmlFor="monthly" css={{ paddingRight: 15, color: '$blueMarine', fontWeight: 'bold' }}>
              Monthly
            </Label>
            <SwitchRoot id="airplane-mode">
              <SwitchThumb />
            </SwitchRoot>
            <Label htmlFor="yearly" css={{ paddingLeft: 15, color: '$blueMarine', fontWeight: 'bold' }}>
              Yearly
            </Label>
          </Flex>
        </SwitchBox>
        
        {selectedPlan && (true)}
      </FormDiv>
      

    </WrapperContainerStep2>
  );
};

