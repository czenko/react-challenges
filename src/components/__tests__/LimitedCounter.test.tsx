import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { LimitedCounter } from "../LimitedCounter";

describe("LimitedCounter component", () => {
  it("Displays a count of 0 by default", async () => {
    render(<LimitedCounter />);
    const countElement = screen.getByTestId("count");
    expect(countElement).toHaveTextContent("0");
  });

  it("Has Increment and Decrement buttons", () => {
    render(<LimitedCounter />);
    const buttons = screen.getAllByRole("button");
    const buttonTexts = buttons.map((button) => button.textContent);

    expect(buttonTexts).toContain("Increment");
    expect(buttonTexts).toContain("Decrement");
  });

  it("Increment button increases count", async () => {
    const user = userEvent.setup();
    render(<LimitedCounter />);

    const incrementButton = screen.getByText("Increment");
    const countElement = screen.getByTestId("count");

    await user.click(incrementButton);
    expect(countElement).toHaveTextContent("1");

    await user.click(incrementButton);
    expect(countElement).toHaveTextContent("2");
  });

  it("Decrement button decreases count", async () => {
    const user = userEvent.setup();
    render(<LimitedCounter />);

    const decrementButton = screen.getByText("Decrement");
    const incrementButton = screen.getByText("Increment");
    const countElement = screen.getByTestId("count");

    await user.click(incrementButton);
    await user.click(incrementButton);
    await user.click(incrementButton);

    await user.click(decrementButton);
    expect(countElement).toHaveTextContent("2");

    await user.click(decrementButton);
    expect(countElement).toHaveTextContent("1");
  });

  it("Does not allow the count to go below 0", async () => {
    const user = userEvent.setup();
    render(<LimitedCounter />);

    const decrementButton = screen.getByText("Decrement");
    const countElement = screen.getByTestId("count");

    await user.click(decrementButton);

    expect(countElement).toHaveTextContent("0");
  });

  it("Does not allow the count to go above 10", async () => {
    const user = userEvent.setup();
    render(<LimitedCounter />);

    const incrementButton = screen.getByText("Increment");
    const countElement = screen.getByTestId("count");

    for (let i = 0; i < 11; i++) {
      await user.click(incrementButton);
    }

    expect(countElement).toHaveTextContent("10");
  });
});
