import React, { useState } from 'react';
import { CheckIcon } from '@radix-ui/react-icons';
import { CheckboxIndicator, CheckboxRoot, Flex, FormDiv, Label, WrapperContainerStep3 } from '../styles/pages/step3';

export default function Step3() {
  return (
    <WrapperContainerStep3>
      <FormDiv>
        <h2>Pick add-ons</h2>
        <p>Add-ons help enhance your gaming experience.</p>

        
        <Flex css={{ alignItems: 'center' }}>
          <CheckboxRoot defaultChecked id="c1">
            <CheckboxIndicator>
              <CheckIcon />
            </CheckboxIndicator>
          </CheckboxRoot>
          <Label css={{ paddingLeft: 15, color: '$green500' }} htmlFor="c1">
            <h3>
              Online service
            </h3>
            <p>
              Access to multiplayer games
            </p>
          </Label>
        </Flex>
        
        <Flex css={{ alignItems: 'center' }}>
          <CheckboxRoot id="c1">
            <CheckboxIndicator>
              <CheckIcon />
            </CheckboxIndicator>
          </CheckboxRoot>
          <Label css={{ paddingLeft: 15, color: '$green500' }} htmlFor="c1">
            <h3>
              Large storage
            </h3>
            <p>
              Extra 11B of cloud sav
            </p>
          </Label>
        </Flex>

        <Flex css={{ alignItems: 'center' }}>
          <CheckboxRoot id="c1">
            <CheckboxIndicator>
              <CheckIcon />
            </CheckboxIndicator>
          </CheckboxRoot>
          <Label css={{ paddingLeft: 15, color: '$green500' }} htmlFor="c1">
            <h3>
              Customizable Profile
            </h3>
            <p>
            Custom theme on vour profile
            </p>
          </Label>
        </Flex>

      </FormDiv>
    </WrapperContainerStep3>
  )
}
