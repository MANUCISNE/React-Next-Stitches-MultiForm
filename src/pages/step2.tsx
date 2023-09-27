import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  BoxSwitch,
  CardBox,
  CardSelectPlan,
  ContentTextMobile,
  FormDivListCheckBox,
  TextBoxSwitch,
  SwitchContainer,
  SwitchRoot,
  SwitchThumb,
  WrapperContainerStep2,
} from "../styles/pages/step2";
import { useGlobalContext } from "../contexts/FormStepContext";

export default function Step2(props: any) {
  const { setPlansMonth, setPlansYearly } = useGlobalContext();
  const [selectedPlan, setSelectedPlan] = useState("");

  const plansForMonth = [
    {
      id: "plan1",
      title: "Arcade",
      price: "$9/mo",
      value: 9,
      img: "/images/icon-arcade.svg",
    },
    {
      id: "plan2",
      title: "Advanced",
      price: "$12/mo",
      value: 12,
      img: "/images/icon-advanced.svg",
    },
    {
      id: "plan3",
      title: "Pro",
      price: "$15/mo",
      value: 15,
      img: "/images/icon-pro.svg",
    },
  ];

  const plansForYearly = [
    {
      id: "plan1",
      title: "Arcade",
      price: "$90/yr",
      value: 90,
      promotion: '2 months free',
      img: "/images/icon-arcade.svg",
    },
    {
      id: "plan2",
      title: "Advanced",
      price: "$120/yr",
      value: 120,
      promotion: '2 months free',
      img: "/images/icon-advanced.svg",
    },
    {
      id: "plan3",
      title: "Pro",
      price: "$150/yr",
      value: 150,
      promotion: '2 months free',
      img: "/images/icon-pro.svg",
    },
  ];
  
  const [isChecked, setIsChecked] = useState(false);

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);
    localStorage.setItem('package', JSON.stringify({package: !isChecked}))
  };
  
  useEffect(() => {
    localStorage.setItem('package', JSON.stringify({package: isChecked}))
  },[])

  const handleSelectPlan = (planId: string) => {
    if(isChecked) {
      let plan = plansForYearly.filter(plan => plan.id == planId);
      // props.handleNext(plan[0])
      setPlansYearly(plan[0])
    } else {
      let plan = plansForMonth.filter(plan => plan.id == planId);
      // props.handleNext(plan[0])
      setPlansMonth(plan[0])
    }
    setSelectedPlan(planId)
  }
  
  return (
    <WrapperContainerStep2>
      <FormDivListCheckBox role="list">
        <h2>Select your plan</h2>
        <p>You have the option of monthly or yearly biling.</p>
        {
          !isChecked ? (
            <CardBox role="listitem">
              {plansForMonth.map((plan) => (
                <CardSelectPlan
                  role="listitemmap"
                  key={plan.id}
                  onClick={() => { handleSelectPlan(plan.id) }}
                  selected={plan.id === selectedPlan}
                >
                  <Image src={plan.img} alt="" width={35} height={35} />
                  <ContentTextMobile>
                    <h5 data-testid="plantitle">{plan.title}</h5>
                    <p>{plan.price}</p>
                  </ContentTextMobile>
                </CardSelectPlan>
              ))}
            </CardBox>
          ) : (
            <CardBox>
              {plansForYearly.map((plan) => (
                <CardSelectPlan
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

        <SwitchContainer>
          <BoxSwitch css={{ alignItems: 'center', color: '$marineBlue' }}>
            <TextBoxSwitch htmlFor="monthly" css={{ paddingRight: 15, color: '$gray900', fontWeight: 'bold' }}>
              Monthly
            </TextBoxSwitch>
            <SwitchRoot id="airplane-mode" onClick={handleSwitchChange}>
              <SwitchThumb />
            </SwitchRoot>
            <TextBoxSwitch htmlFor="yearly" css={{ paddingLeft: 15, color: '$gray900', fontWeight: 'bold' }}>
              Yearly
            </TextBoxSwitch>
          </BoxSwitch>
        </SwitchContainer>

      </FormDivListCheckBox>
    </WrapperContainerStep2>
  );
};
