import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";
test("renders component", async () => {
  const { getByText } = render(<App />);
  expect(getByText("Pogoda dla")).toBeInTheDocument();
  expect(
    getByText("Wybierz miasto dla którego wyświetlić pogodę.")
  ).toBeInTheDocument();
  expect(
    getByText("Jeśli nie wyświetlają się dane pogody to trzeba zmienić klucz.")
  ).toBeInTheDocument();
});
