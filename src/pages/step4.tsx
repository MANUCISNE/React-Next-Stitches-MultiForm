import React, { useEffect, useState } from "react";
import {
  FormDiv,
  WrapperContainerStep4,
  Label,
  Flex,
  TotalPlansCalculate,
  ConfirmButton,
  ButtonChangePlan,
  ButtonChangePlanBox,
  RenderStep2Button,
} from "../styles/pages/step4";
import FinalPage from "../components/finalPage";
import Link from "next/link";
import Step2 from "./step2";

export default function Step4() {
  const [isStep4Visible, setIsStep4Visible] = useState(true);
  const [confirmButtonVisible, setConfirmButtonVisible] = useState(true);
  const [isFinalPageRendered, setIsFinalPageRendered] = useState(false);
  const [isStep2PageRendered, setIsStep2PageRendered] = useState(false);

  const [step2Data, setStep2Data] = useState({});
  const [step3Data, setStep3Data] = useState({});
  const [packageType, setPackageType] = useState({});

  const handleClick = () => {
    setIsStep4Visible(false);
    setConfirmButtonVisible(false);
    setIsFinalPageRendered(true);
  };


  const renderStep2 = () => <Step2/>

  useEffect(() => {
    const dadosArmazenados2 = localStorage.getItem("step2");
    const dadosArmazenados3 = localStorage.getItem("step3");
    const dadosTypePlan = localStorage.getItem("package");

    if (dadosArmazenados2 && dadosArmazenados3 && dadosTypePlan) {
      const obj = JSON.parse(dadosArmazenados2);
      const obj2 = JSON.parse(dadosArmazenados3);
      const obj3 = JSON.parse(dadosTypePlan);
      setStep2Data(obj);
      setStep3Data(obj2);
      setPackageType(obj3);
    }
  }, []);

  return (
    <WrapperContainerStep4>
      {isStep4Visible && (
        <FormDiv>
          <h2>Finishing up</h2>
          <p>Double-check everything looks OK before confirming.</p>

          <Flex css={{ alignItems: "center" }}>
            <Label css={{ paddingLeft: 15, color: "#0000ff" }} htmlFor="c1">
              <h4>
                {step2Data.title} {packageType ? "(Monthly)" : "(Yearly)"}
              </h4>
              <ButtonChangePlanBox>
                  <RenderStep2Button
                    onClick={() => setIsStep2PageRendered(true)}
                  >
                    Change
                </RenderStep2Button>
                {isStep2PageRendered && <Step2/>}
              </ButtonChangePlanBox>
            </Label>
            <p style={{ color: "#0000ff" }}>{step2Data.price}</p>
          </Flex>

          <Flex css={{ alignItems: "center" }}>
            <Label css={{ paddingLeft: 15, color: "#0000ff" }} htmlFor="c1">
              <p>Online service</p>
              <p>Larger storage</p>
            </Label>
            <p style={{ color: "#0000ff" }}>+$10/yr</p>
            <p style={{ color: "#0000ff" }}>+$20/yr</p>
          </Flex>

          <TotalPlansCalculate css={{ alignItems: "center" }}>
            <Label css={{ paddingLeft: 15, color: "#ccc" }} htmlFor="c1">
              <p>Total (per year)</p>
            </Label>
            <p style={{ color: "#0000ff" }}>$90/yr</p>
          </TotalPlansCalculate>
        </FormDiv>
      )}

      {confirmButtonVisible && (
        <ConfirmButton
          style={{ marginTop: "21rem", marginLeft: "21rem" }}
          onClick={handleClick}
        >
          Confirm
        </ConfirmButton>
      )}

      {isFinalPageRendered && <FinalPage />}
    </WrapperContainerStep4>
  );
}
