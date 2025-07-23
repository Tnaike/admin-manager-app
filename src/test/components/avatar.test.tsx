import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

test("should render fallback initials", () => {
  render(
    <Avatar>
      <AvatarImage src="./assets/test.jpg" alt="Test Image" />
      <AvatarFallback>JS</AvatarFallback>
    </Avatar>
  );

  expect(screen.getByText("JS")).toBeInTheDocument();
});
