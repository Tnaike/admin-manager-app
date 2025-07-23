import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import React from "react";
import { Badge } from "../../components/ui/badge";

test("should render badge with text", () => {
    render(<Badge>Badge Text</Badge>);
    expect(screen.getByText("Badge Text")).toBeInTheDocument();
});

test("should render active badge", () => {
    render(<Badge variant="default">Active</Badge>);
    expect(screen.getByText("Active")).toBeInTheDocument();
}); 