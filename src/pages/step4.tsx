import React, { useState } from 'react';
import { FormDiv, WrapperContainerStep4, Label, Flex, TotalPlansCalculate, ConfirmButton } from '../styles/pages/step4';
import FinalPage from '../components/finalPage';

export default function Step4() {
  const [isStep4Visible, setIsStep4Visible] = useState(true);
  const [isFinalPageRendered, setIsFinalPageRendered] = useState(false);

  const handleClick = () => {
    setIsStep4Visible(false);
    setIsFinalPageRendered(true);
  };

  return (
    <WrapperContainerStep4>
      {isStep4Visible && (
        <FormDiv>
          <h2>Finishing up</h2>
          <p>Double-check everything looks OK before confirming.</p>

          <Flex css={{ alignItems: 'center' }}>
            <Label css={{ paddingLeft: 15, color: '#0000ff' }} htmlFor="c1">
              <h4>Arcade (Yearly)</h4>
              <p>Change</p>
            </Label>
            <p style={{ color: '#0000ff' }}>$90/yr</p>
          </Flex>

          <Flex css={{ alignItems: 'center' }}>
            <Label css={{ paddingLeft: 15, color: '#0000ff' }} htmlFor="c1">
              <p>Online service</p>
              <p>Larger storage</p>
            </Label>
            <p style={{ color: '#0000ff' }}>+$10/yr</p>
            <p style={{ color: '#0000ff' }}>+$20/yr</p>
          </Flex>

          <TotalPlansCalculate css={{ alignItems: 'center' }}>
            <Label css={{ paddingLeft: 15, color: '#ccc' }} htmlFor="c1">
              <p>Total (per year)</p>
            </Label>
            <p style={{ color: '#0000ff' }}>$90/yr</p>
          </TotalPlansCalculate>
        </FormDiv>
      )}

      <ConfirmButton onClick={handleClick}>Confirm</ConfirmButton>
      {isFinalPageRendered && <FinalPage />}
    </WrapperContainerStep4>
  );
}