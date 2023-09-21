import { styled } from '@stitches/react';
import React from 'react';

const StepWrapper = styled("div", {
  display: "flex",
  flexDirection: "column",
  zIndex: 2,
  justifyContent: 'center'
});

const StepBox = styled("div", {
  display: "flex",
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
  children: any;
}

export default function Step({ index, active, children }: StepProps) {
  return (
    <StepWrapper>
      {children}
      <StepBox active={active}>{index}</StepBox>
    </StepWrapper>
  );
};
