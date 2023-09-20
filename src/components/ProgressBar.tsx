import { styled } from '@stitches/react';
import React from 'react';

const StepWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  zIndex: 2,
});

const StepBox = styled("div", {
  paddingTop: ".23rem",
  paddingLeft: ".55rem",
  borderRadius: "50%",
  height: '30px',
  width: "30px",
  border: '1px solid $white',
  backgroundColor: "transparent",
  color: "$white",
  transition: "transform 0.3s ease",

  variants: {
    active: {
      true: {
        backgroundColor: "$lightBlue",
        color: "$marineBlue",
        transform: "scale(1.1)",
      },
    },
  },
});

interface StepProps {
  index: number;
  active: boolean;
}

const Step: React.FC<StepProps> = ({ index, active }) => {
  return (
    <StepWrapper>
      <StepBox active={active}>{index}</StepBox>
    </StepWrapper>
  );
};

export default Step;
