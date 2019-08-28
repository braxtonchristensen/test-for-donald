import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";
import expectExport from "expect";

it("renders without crashing", () => {
  const { getByText, getByTestId } = render(<App />);
  const Toggle = getByText("toggle me");
  const Drawer = getByTestId("Drawer");

  fireEvent.click(Toggle);

  const classes = Object.values(Drawer.classList);

  expectExport(classes.includes("Drawer--closed")).toBeTruthy();
});
