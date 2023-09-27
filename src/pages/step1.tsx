import React, { useState } from "react";
import {
  ErrorMessageEmail,
  ErrorMessageName,
  ErrorMessagePhone,
  FormDivStep1,
  InputField,
  Label,
  BoxContainerStep1,
} from "../styles/pages/step1";

export default function Step1() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [styleError, setStyleError] = useState(false);

  const validateForm = () => {
    const nameRegex = /^[A-Za-z 0-9]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    const phoneNumberRegex = /^(\([0-9]{2}\) )?[0-9]{9}$/;

    const nameError = nameRegex.test(formData.username)
      ? ""
      : "O nome deve conter apenas letras.";
    const emailError = emailRegex.test(formData.email)
      ? ""
      : "O email é inválido.";
    const phoneNumberError = phoneNumberRegex.test(formData.phoneNumber)
      ? ""
      : "O telefone é inválido.";

    setErrors({
      name: nameError,
      email: emailError,
      phoneNumber: phoneNumberError,
    });

    if (
      formData.username === "" ||
      formData.email === "" ||
      formData.phoneNumber === ""
    ) {
      setErrors({
        name: nameError,
        email: emailError,
        phoneNumber: phoneNumberError,
      });

      return true;
    }

    if (nameError || emailError || phoneNumberError) {
      return false;
    }

    return true;
  };

  const handleInputsChanges = (fieldName: string, value: string) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
  };

  return (
    <BoxContainerStep1>
      <FormDivStep1>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number</p>

        <Label>Name</Label>
        <InputField
          data-testid="InputNameField"
          styleError={styleError}
          type="text"
          placeholder="Username"
          value={formData.username}
          onChange={(e) => handleInputsChanges("username", e.target.value)}
          onBlur={validateForm}
          required
        />
        {errors.name && (
          <ErrorMessageName style={{ color: "red" }}>
            Only letters is valid
          </ErrorMessageName>
        )}

        <Label>Email Address</Label>
        <InputField
          data-testid="InputNameField"
          styleError={styleError}
          type="text"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => handleInputsChanges("email", e.target.value)}
          onBlur={validateForm}
          required
        />
        {errors.email && (
          <ErrorMessageEmail style={{ color: "red" }}>
            The email is invalid
          </ErrorMessageEmail>
        )}

        <Label>Phone Number</Label>
        <InputField
          data-testid="InputNameField"
          styleError={styleError}
          type="text"
          placeholder="(DD)999999999"
          value={formData.phoneNumber}
          onChange={(e) => handleInputsChanges("phoneNumber", e.target.value)}
          onBlur={validateForm}
          required
        />
        {errors.phoneNumber && (
          <ErrorMessagePhone
            style={{ color: "red", fontWeight: "bold", position: "absolute" }}
          >
            Valid Format: (DD)999999999
          </ErrorMessagePhone>
        )}
      </FormDivStep1>
    </BoxContainerStep1>
  );
}