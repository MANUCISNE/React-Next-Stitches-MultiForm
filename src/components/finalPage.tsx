import React from 'react';
import Image from "next/image";
import { styled } from '@stitches/react';
import ThankYouIcon from "../assets/icon-thank-you.svg"

const StepFourContainerBox = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  justifyContent: 'center',
  alignItems: 'center',

  p: {
    color: '$gray300',
    fontSize: '0.8rem'
  }
});

export default function FinalPage() {

  return (
    
    <StepFourContainerBox>
      <Image src={ThankYouIcon} alt={''} width={50} height={50} />
      <h2>Thank you!</h2>
      <p>
        Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com
      </p>
    </StepFourContainerBox>
  )
}
