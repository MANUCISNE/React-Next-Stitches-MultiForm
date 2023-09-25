import React from "react";
import { render, screen } from "@testing-library/react";
import HelloWorld from "@/src/pages/helloWord";

describe("HelloWorld", () => {
  it("should render a h1 element with the text 'Hello, world!'", () => {
    const { getByText } = render(<HelloWorld />);

    expect(getByText("Hello, world!"))
  });
});
