import React from 'react';
import Image from "next/image";
import { StepFourContainerBox } from '../styles/pages/step4';

import ThankYouIcon from "../assets/icon-thank-you.svg"

export default function Step4() {

  return (
    <StepFourContainerBox>
      <Image src={ThankYouIcon} alt={''} width={50} height={50} />
      <h2>Thank you!</h2>
      <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>
    </StepFourContainerBox>
  );
};
