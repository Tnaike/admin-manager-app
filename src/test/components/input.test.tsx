import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect } from "vitest";
import React from "react";
import { Input } from "@/components/ui/input";

test("should render input and accept value", async () => {
  const user = userEvent.setup();
  render(<Input placeholder="Type here" />);

  const input = screen.getByPlaceholderText("Type here");
  expect(input).toBeInTheDocument();

  await user.type(input, "Hello");
  expect(input).toHaveValue("Hello");
});
