import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'
import { useState } from 'react'

import { BoxWrapper, ButtonDivPosition, ButtonDivTeste, ButtonNext, CenterWrapper, Container, StepsButtons, Teste } from '../styles/pages/app'
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

  const Steps = [1, 2, 3, 4];

  return (
    <Container>
      <Image src={SideBar} alt={""} width={350} height={420} />

      <CenterWrapper>
        {Steps.map((item) => (
          <Step
            key={item}
            index={item}
            active={step === item}
          />
        ))}
        </CenterWrapper>
      <Teste>
        <BoxWrapper>{getCompStep()}</BoxWrapper>
        <ButtonDivTeste>
          <Link href={''}>
              <button
                onClick={() => setStep(step - 1)}
                disabled={step === 1}
                style={{textDecoration: 'none', color: '$marineBlue',}}
              >
                Go Back
              </button>
            </Link>
            <ButtonNext onClick={() => step !== 4 && setStep(step + 1)}>Next Step</ButtonNext>
        </ButtonDivTeste>

      </Teste>
        
      {/*<Component {...pageProps} />*/}
    </Container>
  )
}