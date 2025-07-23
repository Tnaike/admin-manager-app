import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect, vi } from "vitest";
import React from "react";
import { Button } from "@/components/ui/button";

test("should renders button and handles click", async () => {
  const user = userEvent.setup();
  const onClick = vi.fn();

  render(<Button onClick={onClick}>Click me</Button>);

  expect(screen.getByText("Click me")).toBeTruthy();

  await user.click(screen.getByText("Click me"));
  expect(onClick).toHaveBeenCalledTimes(1);
});
