import React, { useState } from "react";
import Image from "next/image";
import {
  CardBox,
  CardSelectPlan,
  ContentTextMobile,
  Flex,
  FormDiv,
  Label,
  SwitchBox,
  SwitchRoot,
  SwitchThumb,
  WrapperContainerStep2,
} from "../styles/pages/step2";

export default function Step2(props: any) {
  const [selectedPlan, setSelectedPlan] = useState("");

  const plansMonth = [
    {
      id: "plan1",
      title: "Arcade",
      price: "$9/mo",
      img: "/images/icon-arcade.svg",
    },
    {
      id: "plan2",
      title: "Advanced",
      price: "$12/mo",
      img: "/images/icon-advanced.svg",
    },
    {
      id: "plan3",
      title: "Pro",
      price: "$15/mo",
      img: "/images/icon-pro.svg",
    },
  ];
  
  const plansYearly = [
    {
      id: "plan1",
      title: "Arcade",
      price: "$90/yr",
      promotion: '2 months free',
      img: "/images/icon-arcade.svg",
    },
    {
      id: "plan2",
      title: "Advanced",
      price: "$120/yr",
      promotion: '2 months free',
      img: "/images/icon-advanced.svg",
    },
    {
      id: "plan3",
      title: "Pro",
      price: "$150/yr",
      promotion: '2 months free',
      img: "/images/icon-pro.svg",
    },
  ];

  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
    localStorage.setItem('package', JSON.stringify({package: isChecked}))
  };

  const handleSelectPlan = (planId: string) => {
    if(isChecked) {
      let plan = plansYearly.filter(plan => plan.id == planId);
      props.handleNext(plan[0])
    } else {
      let plan = plansMonth.filter(plan => plan.id == planId);
      props.handleNext(plan[0])
    }
    setSelectedPlan(planId)
  }
  
  return (
    <WrapperContainerStep2>
      <FormDiv role="list">
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly biling.</p>
        {
          !isChecked ? (
            <CardBox>
              {plansMonth.map((plan) => (
                <CardSelectPlan
                  role="listitem"
                  key={plan.id}
                  onClick={() => { handleSelectPlan(plan.id) }}
                  selected={plan.id === selectedPlan}
                >
                  <Image src={plan.img} alt="" width={35} height={35} />
                  <ContentTextMobile>
                    <h5>{plan.title}</h5>
                    <p>{plan.price}</p>
                  </ContentTextMobile>
                </CardSelectPlan>
              ))}
            </CardBox>
          ) : (
            <CardBox>
              {plansYearly.map((plan) => (
                <CardSelectPlan
                  role="listitem"
                  key={plan.id}
                  onClick={() => { handleSelectPlan(plan.id) }}
                  selected={plan.id === selectedPlan}
                >
                  <Image src={plan.img} alt="" width={35} height={35} />
                  <ContentTextMobile>
                    <h5>{plan.title}</h5>
                    <p>{plan.price}</p>
                    <span>{plan.promotion}</span>
                  </ContentTextMobile>
                </CardSelectPlan>
              ))}
            </CardBox>
          )
        }

        <SwitchBox>
          <Flex css={{ alignItems: 'center', color: '$marineBlue' }}>
            <Label htmlFor="monthly" css={{ paddingRight: 15, color: '$gray900', fontWeight: 'bold' }}>
              Monthly
            </Label>
            <SwitchRoot id="airplane-mode" onClick={handleSwitchChange}>
              <SwitchThumb />
            </SwitchRoot>
            <Label htmlFor="yearly" css={{ paddingLeft: 15, color: '$gray900', fontWeight: 'bold' }}>
              Yearly
            </Label>
          </Flex>
        </SwitchBox>

      </FormDiv>
    </WrapperContainerStep2>
  );
};
