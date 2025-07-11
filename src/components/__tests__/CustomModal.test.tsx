import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";

import CustomModal from "../CustomModal";

describe("CustomModal component", () => {
  it("Has a 'Show Modal' button", async () => {
    render(<CustomModal />);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Show Modal");
  });

  it("Shows modal when 'Show Modal' button is clicked", async () => {
    const user = userEvent.setup();
    render(<CustomModal />);

    const button = screen.getByRole("button");

    await user.click(button);

    const modal = screen.getByTestId("modal");

    expect(modal).toBeInTheDocument();
  });
  it("Modal shows text 'This is a modal!'", async () => {
    const user = userEvent.setup();
    render(<CustomModal />);

    const button = screen.getByRole("button");

    await user.click(button);
    const modal = screen.getByTestId("modal");

    expect(modal).toHaveTextContent("This is a modal!");
  });
  it("Shows 'Close Modal' button when modal is open", async () => {
    const user = userEvent.setup();
    render(<CustomModal />);

    const openButton = screen.getByRole("button");

    expect(screen.queryByText("Close Modal")).not.toBeInTheDocument();

    await user.click(openButton);

    expect(screen.getByText("Close Modal")).toBeInTheDocument();
  });

  it("Modal closes when 'Close Modal' is clicked", async () => {
    const user = userEvent.setup();
    render(<CustomModal />);

    const openButton = screen.getByRole("button");

    await user.click(openButton);

    const closeButton = screen.getByText("Close Modal");
    await user.click(closeButton);

    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
  });

  it("Clicking only on the outside screen closes the modal", async () => {
    const user = userEvent.setup();
    render(<CustomModal />);

    const openButton = screen.getByRole("button");

    await user.click(openButton);

    const outsideScreen = screen.getByTestId("screen");
    const modal = screen.getByTestId("modal");

    await user.click(modal);

    expect(screen.queryByTestId("modal")).toBeInTheDocument();

    await user.click(outsideScreen);

    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
  });

  it("Tabbing on keyboard with open modal only focuses on close button", async () => {
    const user = userEvent.setup();
    render(<CustomModal />);

    const openButton = screen.getByRole("button");

    await user.click(openButton);

    await user.tab();
    await user.tab();
    await user.tab();

    const closeButton = screen.getByText("Close Modal");
    expect(closeButton).toHaveFocus();
  });

  it("Prevents page scrolling when modal is open", async () => {
    const user = userEvent.setup();
    render(<CustomModal />);

    const openButton = screen.getByRole("button");
    await user.click(openButton);

    expect(document.body.style.overflow).toBe("hidden");
  });

  it("The escape key closes the modal when it's open", async () => {
    const user = userEvent.setup();
    render(<CustomModal />);

    const openButton = screen.getByRole("button");

    await user.click(openButton);
    await user.keyboard("{Escape}");

    expect(screen.queryByTestId("modal")).not.toBeInTheDocument();
  });

  it("Modal has accessible aria and role attributes", async () => {
    const user = userEvent.setup();
    render(<CustomModal />);

    const openButton = screen.getByRole("button");

    await user.click(openButton);

    const modal = screen.getByTestId("modal");

    expect(modal).toHaveAttribute("role", "alertdialog");
    expect(modal).toHaveAttribute("aria-modal", "true");
    expect(modal).toHaveAttribute("aria-labelledby");
  });
});
