import React, { useState } from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import { CheckboxIndicator, CheckboxRoot, Flex, FormDiv, Label, WrapperContainerStep3 } from '../styles/pages/step3';

export default function Step3(props) {
  const [addons, setAddons] = useState([
    {
      id: '1',
      name: "Online service",
      description: "Acess to multiplayer games",
      price: "$9/mo",
    },
    {
      id: '2',
      name: "Advanced",
      description: "Extra 1TB of could save your game",
      price: "$12/mo",
    },
    {
      id: '3',
      name: "Pro",
      description: "Custom theme on your profile",
      price: "$15/mo",
    },
  ]);

  const handleNext = () => {
    localStorage.setItem("step3FormData", JSON.stringify({
      addons
    }));

  };
  return (
    <WrapperContainerStep3>
      <FormDiv>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>

        {addons.map((addon) => (
          // eslint-disable-next-line react/jsx-key
          <Flex css={{ alignItems: 'center' }}>
            <CheckboxRoot defaultChecked id="c1">
              <CheckboxIndicator>
                <CheckIcon />
              </CheckboxIndicator>
            </CheckboxRoot>
                  
            <Label css={{ paddingLeft: 15, color: '#0000ff' }} htmlFor="c1">
              <h4>{addon.name}</h4>
              <p>{addon.description}</p>
            </Label>
            <p style={{ color: '#0000ff' }}>{addon.price}</p>
          </Flex>
        ))}
      </FormDiv>
    </WrapperContainerStep3>
  )
}
