import React, { useEffect, useState } from 'react';
import { FormDiv, WrapperContainerStep4, Label, Flex, TotalPlansCalculate, ConfirmButton, PlanTypeContainer, AdditionalContainer } from '../styles/pages/step4';
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
    selectedAdditional: {...additional}, 
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
      const selectedAdditional = additional.filter(plan => plan.checked === true)
      obj = {...plansYearly, plan: '(Yearly)'}
      setData(obj)
    } else if(!typePlan && additional) {
      const selectedAdditional = additional.filter(plan => plan.checked === true)
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
  const soma = valueSelected.reduce((accumulator, valueCurrent) => {
    return accumulator + valueCurrent;
  }, 0);

  return (
    <WrapperContainerStep4>
      {isStep4Visible && (
        <FormDiv>
          <h2>Finishing up</h2>
          <p>Double-check everything looks OK before confirming.</p>

          <Flex css={{ alignItems: 'center' }}>
            <PlanTypeContainer>
              <Label css={{ paddingLeft: 15, color: '#0000ff' }} htmlFor="c1" data-testid="plan-type">
                <h4>{data.title} {data.plan}</h4>
                <p>Change</p>
              </Label>
              <p style={{ color: '#0000ff' }}>{data.price}</p>
            </PlanTypeContainer>

            {selectedFiltered?.map((item, index) => (
              <AdditionalContainer key={index}>
                <Label css={{ paddingLeft: 15, color: '#c4c4cc' }} htmlFor="c1">
                  <p>{item.name}</p>
                </Label>
                <Label>
                  <p style={{ color: '#0000ff' }}>{item.price}</p>
                </Label>
              </AdditionalContainer>
            ))}
          </Flex>

          <TotalPlansCalculate css={{ alignItems: 'center' }}>
            <Label css={{ paddingLeft: 15, color: '#ccc' }} htmlFor="c1">
              <p>Total {data.plan}</p>
            </Label>
            <p style={{ color: '#0000ff' }}>${soma}/{typePlan ? 'yr' : 'mo'}</p>
          </TotalPlansCalculate>
        </FormDiv>
      )}

      {confirmButtonVisible && <ConfirmButton onClick={handleClick}>Confirm</ConfirmButton>}
      
      {isFinalPageRendered && <FinalPage />}
    </WrapperContainerStep4>
  );
}