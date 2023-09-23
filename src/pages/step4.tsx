import React from 'react';

export default function Step4(props) {

  const step1FormData = JSON.parse(localStorage.getItem("FormData") || '{}');
  
  return (
    <div>
      <h2>Summary</h2>

      <h3>Step 1</h3>
      <p>Username: {step1FormData.username}</p>
      <p>Email: {step1FormData.email}</p>
      <p>Phone Number: {step1FormData.phoneNumber}</p>

      <h3>Step 2</h3>
      <p>Selected Plan: {step2FormData.selectedPlan}</p>
      <p>Biling Cycle: {step2FormData.billingCycle}</p>

      <h3>Step 3</h3>
      <p>Add-ons:</p>
      <ul>
        {step3FormData.addons.map((addon: any) => (
          <li key={addon}>{addon}</li>
        ))}
      </ul>
    </div>
  );
};
