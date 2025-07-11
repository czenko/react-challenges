import { screen, render, within } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";

import FruitFilter from "../FruitFilter";

describe("FruitFilter component", () => {
  it("Displays a popular fruit name", async () => {
    render(<FruitFilter />);
    const fruitList = screen.getByRole("list");
    expect(within(fruitList).getByText("Apple")).toBeInTheDocument();
    expect(within(fruitList).getByText("Banana")).toBeInTheDocument();
  });
  it("Includes a text input field", async () => {
    render(<FruitFilter />);
    const textInput = screen.getByRole("textbox");
    expect(textInput).toBeDefined();
    expect(textInput).toHaveAttribute("type", "text");
  });

  it("Filters fruits when typing 'a' to show all fruits containing 'a'", async () => {
    const user = userEvent.setup();
    render(<FruitFilter />);

    const textInput = screen.getByRole("textbox");
    const fruitList = screen.getByRole("list");

    await user.type(textInput, "a");

    expect(within(fruitList).getByText("Apple")).toBeInTheDocument();
    expect(within(fruitList).getByText("Banana")).toBeInTheDocument();
    expect(within(fruitList).queryByText("Cherry")).not.toBeInTheDocument();
    expect(within(fruitList).queryByText("Date")).toBeInTheDocument();
    expect(within(fruitList).queryByText("Elderberry")).not.toBeInTheDocument();
  });

  it("If the list is empty, show 'No results found'", async () => {
    const user = userEvent.setup();
    render(<FruitFilter />);

    const textInput = screen.getByRole("textbox");
    await user.type(textInput, "zzz");

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
    expect(screen.getByText("No results found")).toBeInTheDocument();
  });
});
