import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect } from "vitest";
import React from "react";
import { RadioGroup, RadioGroupItem } from "../../components/ui/radio-group";

test("should render radio group and allow selection", async () => {
    const user = userEvent.setup();
    render(
        <RadioGroup>
            <RadioGroupItem value="a" />
            <RadioGroupItem value="b" />
        </RadioGroup>
    );
    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(2);
    expect(radios[0]).not.toBeChecked();
    await user.click(radios[0]);
    expect(radios[0]).toBeChecked();
}); 