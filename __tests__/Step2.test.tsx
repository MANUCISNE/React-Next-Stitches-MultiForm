
test('handleSwitchChange should set the isChecked state variable to the opposite of its current value and set the package item in localStorage to a JSON object with the package property set to the new isChecked value', () => {
  // Set the initial isChecked state variable value.
  const isChecked = true;

  // Call the handleSwitchChange function.
  handleSwitchChange();

  // Check that the isChecked state variable value was set to the opposite of its initial value.
  expect(isChecked).toBeFalsy();

  // Get the package item from localStorage.
  const packageItem = localStorage.getItem('package');

  // Parse the package item from JSON.
  const packageObject = JSON.parse(packageItem);

  // Check that the package property of the package object is set to the new isChecked value.
  expect(packageObject.package).toBeFalsy();
});
