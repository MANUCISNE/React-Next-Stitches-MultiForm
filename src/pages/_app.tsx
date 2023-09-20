import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { useState } from 'react'

import { BoxWrapper, ButtonContainer, ButtonDivTeste, ButtonNext, CenterWrapper, Container, TextDivProgressBar } from '../styles/pages/app'
import Image from "next/image";

import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Step4 from './step4'
import Step from '../components/ProgressBar'

import SideBar from "../assets/bg-sidebar-desktop.svg"
import Link from 'next/link';

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  const [step, setStep] = useState(1);

  const getCompStep = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
      default:
        return <Step1 />;
    }
  };

  const Steps = [
    {
      item: 1,
      title: 'STEP 1',
      description: 'YOUR INFO'
    },
    {
      item: 2,
      title: 'STEP 2',
      description: 'SELECT PLAN'
    },
    {
      item: 3,
      title: 'STEP 3',
      description: 'ADD-ONS'
    },
    {
      item: 4,
      title: 'STEP 4',
      description: 'SUMMARY'
    }
  ];


  return (
    <Container>
      <Image src={SideBar} alt={""} width={350} height={420} />

      <CenterWrapper>
        {Steps.map((stepItem) => (
          <Step
            key={stepItem.item}
            index={stepItem.item}
            active={step === stepItem.item}
          >
          <TextDivProgressBar>
            <h5>{stepItem.title}</h5>
            <p>{stepItem.description}</p>
          </TextDivProgressBar>
          </Step>
        ))}
        </CenterWrapper>
      
      <ButtonContainer>
        <BoxWrapper>{getCompStep()}</BoxWrapper>
        <ButtonDivTeste>
          {step !== 1 && step !== 4 && (
            <Link href={''}>
            <button
              onClick={() => setStep(step - 1)}
              disabled={step === 1}
              style={{textDecoration: 'none', color: '$marineBlue', background: 'transparent', border: 'none'}}
            >
              Go Back
            </button>
            </Link>
          )}

          {step !== 4 && (
            <ButtonNext onClick={() => step !== 4 && setStep(step + 1)}>Next Step</ButtonNext>
          )}
            
        </ButtonDivTeste>
      </ButtonContainer>
        
      {/*<Component {...pageProps} />*/}
    </Container>
  )
}