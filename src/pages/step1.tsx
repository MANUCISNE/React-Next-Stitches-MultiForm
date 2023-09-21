import React, { useState } from "react";
import {
  FormDiv,
  InputField,
  Label,
  WrapperContainerStep1,
} from "../styles/pages/step1";


export default function Step1() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [valid, setValid] = useState(true);
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/;
  const phoneRegex = /^\d{11}$/;

  const validateForm = () => {
    const isEmailValid = emailRegex.test(email);
    const isPhoneValid = phoneRegex.test(phoneNumber);
    const isUsernameValid = !!username.trim();

    setValid(isEmailValid && isPhoneValid && isUsernameValid);
  };

  return (
    <WrapperContainerStep1>
      <FormDiv>
        <h2>Personal info</h2>
        <p>Please provide your name, email address, and phone number</p>

        <Label>Name</Label>
        <InputField
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <Label>Email Adress</Label>
        <InputField
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Label>Phone Number</Label>
        <InputField
          type="text"
          placeholder="(DD)999999999"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        {!valid && <p>This field is required</p>}
      </FormDiv>
    </WrapperContainerStep1>
  );
}
