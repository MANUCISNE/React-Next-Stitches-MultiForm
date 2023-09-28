import { globalStyles } from '../styles/global'
import { useEffect, useState } from 'react'
import Image from "next/image";

import { AppProps } from 'next/app';

import {
  BoxWrapper,
  ButtonContainerApp,
  ButtonDivBox,
  ButtonNext,
  ProgressBarBoxApp,
  ContainerAppBox,
  ContainerImageBox,
  GoBackButton,
  PictureBackground,
  TextDivProgressBar
} from '../styles/pages/app'

import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Step4 from './step4'
import Step from '../components/ProgressBar'
import { GlobalContextProvider } from '../contexts/FormStepContext';

globalStyles()
  
export default function App({ Component, pageProps }: AppProps) {
  const [step, setStep] = useState(1);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  useEffect(() => {
    const updateScreenWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', updateScreenWidth);


    updateScreenWidth();

    return () => {
      window.removeEventListener('resize', updateScreenWidth);
    };
  }, []);

  const getCompStep = () => {
    switch (step) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 handleNext={handleNext}/>;
      case 3:
        return <Step3 />;
      case 4:
        return <Step4 />;
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

  function handleNext(obj: {}) {
    localStorage.setItem(`step${step}`, JSON.stringify(obj))
  }

  return (
    <GlobalContextProvider>
      <ContainerImageBox {...pageProps}>
      {screenWidth <= 375 && (
        <Image src="/images/bg-sidebar-mobile.svg" alt="Imagem 2" width={375} height={172} style={{marginBottom: '55rem' }}/>
        )}
          <ContainerAppBox>
            <PictureBackground>
              <Image src="/images/bg-sidebar-desktop.svg" alt="Imagem 1" width={210} height={420} />
            </PictureBackground>

          <ProgressBarBoxApp>
            {Steps.map((stepItem) => (
              <>
              <Step
                key={stepItem.item}
                index={stepItem.item}
                active={step === stepItem.item}
              >
              </Step>
              <TextDivProgressBar>
                <h5>{stepItem.title}</h5>
                <p>{stepItem.description}</p>
              </TextDivProgressBar>
              </>
            ))}
            </ProgressBarBoxApp>
          
          <ButtonContainerApp>
            <BoxWrapper>{getCompStep()}</BoxWrapper>
            <ButtonDivBox>
              {step !== 1 && (
                <GoBackButton
                  onClick={() => setStep(step - 1)}
                  disabled={step === 1}
                >
                  Go Back
                </GoBackButton>
              )}

              {step !== 4 && (
                  <ButtonNext onClick={() => {
                    handleNext
                    step !== 4 && setStep(step + 1)
                  }}>Next Step</ButtonNext>
              )}
                
            </ButtonDivBox>
          </ButtonContainerApp>
        </ContainerAppBox>
      </ContainerImageBox>
    </GlobalContextProvider>
  )
}
