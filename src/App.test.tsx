import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("Add to cart button increments cart counter", () => {
  render(<App />);
  const cartCounter = screen.getByText("0");
  fireEvent.click(screen.getByText("Add to Cart"));

  expect(cartCounter).toHaveTextContent("1");
});
