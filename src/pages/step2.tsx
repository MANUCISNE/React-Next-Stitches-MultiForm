import React, { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";

import SideBar from "../assets/bg-sidebar-desktop.svg";
import ArcadePlanIcon from "../assets/icon-arcade.svg";
import AdvancedPlanIcon from "../assets/icon-advanced.svg";
import ProPlanIcon from "../assets/icon-pro.svg";

import { ButtonNextStep2, DivTeste, Flex, FormDiv, Label, SwitchBox, SwitchRoot, SwitchThumb, WrapperContainerStep2 } from '../styles/pages/step2';

export default function Step2() {
  const [selectedPlan, setSelectedPlan] = useState('');
  const [mode, setMode] = useState("monthly");
  const plans = [
    {
      id: 'plan1',
      title: 'Arcade',
      price: '$9/mo',
      img: '/ArcadePlanIcon',
    },
    {
      id: 'plan2',
      title: 'Advanced',
      price: '$12/mo',
      img: '/ArcadePlanIcon',
    },
    {
      id: 'plan3',
      title: 'Pro',
      price: '$15/mo',
      img: '/ArcadePlanIcon',
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
          <Image src={plan.img} alt={''} width={20} height={20}/>
          <h3>{plan.title}</h3>
          <p>{plan.price}</p>
        </DivTeste>
      ))}
        
        <SwitchBox>
          <Flex css={{ alignItems: 'center', color: '$marineBlue' }}>
            <Label htmlFor="monthly" css={{ paddingRight: 15, color: '$gray900', fontWeight: 'bold' }}>
              Monthly
            </Label>
            <SwitchRoot id="airplane-mode">
              <SwitchThumb />
            </SwitchRoot>
            <Label htmlFor="yearly" css={{ paddingLeft: 15, color: '$gray900', fontWeight: 'bold' }}>
              Yearly
            </Label>
          </Flex>
        </SwitchBox>
        
      {selectedPlan && (
        <ButtonNextStep2 style={{textDecoration: 'none', color: '$gray900',}}>
          <Link href="/step3">Next Step</Link>
        </ButtonNextStep2>
      )}
      <Link href="/step1" style={{textDecoration: 'none', color: '$gray900',}}>Go Back</Link>
      </FormDiv>
      

    </WrapperContainerStep2>
  );
};

