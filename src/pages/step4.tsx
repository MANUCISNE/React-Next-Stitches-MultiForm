import React, { useEffect, useState } from 'react';
import {
  WrapperContainerStep4,
  TotalPlansCalculate,
  ConfirmButton,
  PlanTypeContainer,
  AdditionalContainer,
  FormDivStep4,
  TextResumStep4,
  FirstBoxResumStep4
} from '../styles/pages/step4';
import FinalPage from '../components/finalPage';
import { useGlobalContext } from '../contexts/FormStepContext';

export default function Step4() {
  const { additional, plansMonth, plansYearly } = useGlobalContext();
  const [isStep4Visible, setIsStep4Visible] = useState(true);
  const [confirmButtonVisible, setConfirmButtonVisible] = useState(true);
  const [isFinalPageRendered, setIsFinalPageRendered] = useState(false);
  const [typePlan, setTypePlan] = useState(false)
  const [data, setData] = useState({
    plans: {...plansMonth},
    plan: '(Month)'
  })

  useEffect(() => {
    let localStoragePackage = localStorage.getItem('package');
    let localPackage = localStoragePackage?.includes('true') ? true : false
    setTypePlan(localPackage)
  }, []);

  function mountShowData() {
    let obj = {}
    if(typePlan && additional) {
      obj = {...plansYearly, plan: '(Yearly)'}
      setData(obj)
    } else if(!typePlan && additional) {
      obj = {...plansMonth, plan: '(Month)'}
      setData(obj)
    }
  }

  useEffect(() => {
    mountShowData()
  }, [typePlan])

  const handleClick = () => {
    setIsStep4Visible(false);
    setConfirmButtonVisible(false)
    setIsFinalPageRendered(true);
  };

  const selectedFiltered = additional?.filter(add => add.checked === true)
  const valueSelected = selectedFiltered?.map((add) => add.value)
  if(typePlan) {
    valueSelected?.push(plansYearly.value)
  } else {
    valueSelected?.push(plansMonth.value)
  }
  const soma = valueSelected?.reduce((accumulator, valueCurrent) => {
    return accumulator + valueCurrent;
  }, 0);

  return (
    <WrapperContainerStep4>
      {isStep4Visible && (
        <FormDivStep4>
          <h2>Finishing up</h2>
          <p>Double-check everything looks OK before confirming.</p>

          <FirstBoxResumStep4 css={{ alignItems: 'center' }}>
            <PlanTypeContainer>
              <TextResumStep4 css={{ paddingLeft: 15, color: '#0000ff' }} htmlFor="c1" data-testid="plan-type">
                <h4>{data.title} {data.plan}</h4>
                <p>Change</p>
              </TextResumStep4>
              <p style={{ color: '#0000ff' }}>{data.price}</p>
            </PlanTypeContainer>

            {selectedFiltered?.map((item, index) => (
              <AdditionalContainer key={index}>
                <TextResumStep4 css={{ paddingLeft: 15, color: '#c4c4cc' }} htmlFor="c1">
                  <p>{item.name}</p>
                </TextResumStep4>
                <TextResumStep4>
                  <p style={{ color: '#0000ff' }}>{item.price}</p>
                </TextResumStep4>
              </AdditionalContainer>
            ))}
          </FirstBoxResumStep4>

          <TotalPlansCalculate css={{ alignItems: 'center' }}>
            <TextResumStep4 css={{ paddingLeft: 15, color: '#ccc' }} htmlFor="c1">
              <p>Total {data.plan}</p>
            </TextResumStep4>
            <p style={{ color: '#0000ff' }}>${soma}/{typePlan ? 'yr' : 'mo'}</p>
          </TotalPlansCalculate>
        </FormDivStep4>
      )}

      {confirmButtonVisible && <ConfirmButton onClick={handleClick}>Confirm</ConfirmButton>}
      
      {isFinalPageRendered && <FinalPage />}
    </WrapperContainerStep4>
  );
}