import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import { BoxWrapper, ButtonWrapper, CenterWrapper, Container, FlexWrapper, HStackWrapper } from '../styles/pages/app'
import { useState } from 'react'
import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import Step4 from './step4'
import Step from '../components/ProgressBar'

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
    <FlexWrapper>
      <CenterWrapper>
        <HStackWrapper>
          {Steps.map((item) => (
            <Step
              key={item}
              index={item}
              active={step === item}
            />
          ))}
        </HStackWrapper>

        <hr />

        <BoxWrapper>{getCompStep()}</BoxWrapper>

        <HStackWrapper>
          <ButtonWrapper
            onClick={() => setStep(step - 1)}
            disabled={step === 1}
          >
            Voltar
          </ButtonWrapper>
          <ButtonWrapper
            onClick={() => step !== 4 && setStep(step + 1)}
          >
            {step === 3 ? "Enviar" : "Próximo"}
          </ButtonWrapper>
        </HStackWrapper>
      </CenterWrapper>
    </FlexWrapper>
      {/*<Component {...pageProps} />*/}
    </Container>
  )
}
