import { handleInputsChanges } from "@/src/styles/pages/step1";

describe("handleInputsChanges", () => {
  it("should update the form data when an input is changed", () => {
    const formData = {
      username: "",
      email: "",
      phoneNumber: "",
    };

    handleInputsChanges({
      username: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "(12) 3456-7890",
    });

    expect(formData).toEqual({
      username: "John Doe",
      email: "john.doe@example.com",
      phoneNumber: "(12) 3456-7890",
    });
  });
});
