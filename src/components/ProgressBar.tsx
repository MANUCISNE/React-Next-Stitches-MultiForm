import { styled } from '@stitches/react';
import React from 'react';

const StepWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  zIndex: 2,
});

const StepBox = styled("div", {
  padding: '0.8rem 0.8rem',
  borderRadius: "50%",
  textAlign: 'center',
  height: '12px',
  width: "12px",
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
