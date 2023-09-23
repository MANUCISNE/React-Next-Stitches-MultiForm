import React, { useState } from "react";
import {
  ErrorMessageEmail,
  ErrorMessageName,
  ErrorMessagePhone,
  FormDiv,
  InputField,
  Label,
  WrapperContainerStep1,
} from "../styles/pages/step1";

export default function Step1({errorStyle, props}: any) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    phoneNumber: false,
  });

  const [styleError, setStyleError] = useState(false)
  
  const validateForm = () => {
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneNumberRegex = /^\([0-9]{2}\) [0-9]{5}-[0-9]{4}$/;

    const nameError = nameRegex.test(formData.username) 
    const emailError = emailRegex.test(formData.email) 
    const phoneNumberError = phoneNumberRegex.test(formData.phoneNumber)

    setErrors({
      name: nameError,
      email: emailError,
      phoneNumber: phoneNumberError,
    });

    if (nameError || emailError || phoneNumberError) {
      return false;
    }

    return true;
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
          styleError={styleError}
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => handleInputsChanges("username", e.target.value)}
          onBlur={validateForm}
          required
        />
        {errors.name && <ErrorMessageName style={{ color: 'red' }}>This field is required</ErrorMessageName>}

        <Label>Email Adress</Label>
        <InputField
          styleError={styleError}
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleInputsChanges("email", e.target.value)}
          onBlur={validateForm}
          required
        />
        {errors.email && <ErrorMessageEmail style={{ color: 'red' }}>This field is required
          </ErrorMessageEmail>}

        <Label>Phone Number</Label>
        <InputField
          styleError={styleError}
          type="text"
          placeholder="(DD)999999999"
          value={formData.phoneNumber}
          onChange={(e) => handleInputsChanges("phoneNumber", e.target.value)}
          onBlur={validateForm}
          required
        />
        {errors.phoneNumber && <ErrorMessagePhone style={{color: 'red', fontWeight: 'bold', position: 'absolute'}}>This field is required
          </ErrorMessagePhone>}
      </FormDiv>
    </WrapperContainerStep1>
  );
};
