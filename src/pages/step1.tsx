import React, { useState } from "react";
import {
  ErrorMessage,
  FormDiv,
  InputField,
  Label,
  WrapperContainerStep1,
} from "../styles/pages/step1";

export default function Step1(props: any) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
  });

  const [valid, setValid] = useState(true);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
  const phoneRegex = /^\d{11}$/;

  const validateForm = () => {
    const isEmailValid = emailRegex.test(formData.email);
    const isPhoneValid = phoneRegex.test(formData.phoneNumber);
    const isUsernameValid = !!formData.username.trim();

    setValid(isEmailValid && isPhoneValid && isUsernameValid);
  }

  const handleInputsChanges = (fieldName: string, value: string) => { 
    setFormData({
      ...formData, 
      [fieldName]: value,
    })
    props.handleNext(formData)
  }

  return (
    <WrapperContainerStep1>
      <FormDiv>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number</p>

        <Label>Name</Label>
        <InputField
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => handleInputsChanges("username", e.target.value)}
          onBlur={validateForm}
          required
        />

        <Label>Email Adress</Label>
        <InputField
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleInputsChanges("email", e.target.value)}
          onBlur={validateForm}
          required
        />

        <Label>Phone Number</Label>
        <InputField
          type="text"
          placeholder="(DD)999999999"
          value={formData.phoneNumber}
          onChange={(e) => handleInputsChanges("phoneNumber", e.target.value)}
          onBlur={validateForm}
          required
        />
        {!valid && (
          <ErrorMessage style={{color: 'red', fontWeight: 'bold', position: 'absolute'}}>
            This field is required
          </ErrorMessage>
        )}
      </FormDiv>
    </WrapperContainerStep1>
  );
};
