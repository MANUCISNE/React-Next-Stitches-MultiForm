import React from 'react';
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
            <h4>
              Online service
            </h4>
            <p>
              Access to multiplayer games
            </p>
          </Label>
          <p style={{color: '#0000ff'}}>
            +$1/mo
          </p>
        </Flex>
        
        <Flex css={{ alignItems: 'center' }}>
          <CheckboxRoot id="c1">
            <CheckboxIndicator>
              <CheckIcon />
            </CheckboxIndicator>
          </CheckboxRoot>
          <Label css={{ paddingLeft: 15, color: '$green500' }} htmlFor="c1">
            <h4>
              Large storage
            </h4>
            <p>
              Extra 11B of cloud sav
            </p>
          </Label>
          <p style={{ color: '#0000ff', display: 'flex', justifyContent: 'flex-end'}}>
            +$2/mo
          </p>
        </Flex>

        <Flex css={{ alignItems: 'center' }}>
          <CheckboxRoot id="c1">
            <CheckboxIndicator>
              <CheckIcon />
            </CheckboxIndicator>
          </CheckboxRoot>
          <Label css={{ paddingLeft: 15, color: '$green500' }} htmlFor="c1">
            <h4>
              Customizable Profile
            </h4>
            <p>
            Custom theme on vour profile
            </p>
          </Label>
          <p style={{color: '#0000ff'}}>
            +$2/mo
          </p>
        </Flex>

      </FormDiv>
    </WrapperContainerStep3>
  )
}
