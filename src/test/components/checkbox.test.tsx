import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect } from "vitest";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

test("should render checkbox and toggle state on click", async () => {
  const user = userEvent.setup();

  render(<Checkbox />);
  const checkbox = screen.getByRole("checkbox");

  expect(checkbox).not.toBeChecked();
  await user.click(checkbox);
  expect(checkbox).toBeChecked();
});
