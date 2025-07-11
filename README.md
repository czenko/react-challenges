# React Component Demos

## Introduction

This is a series of practice React challenges demonstrating:

- **Strong understanding of React** principles such as events, useRef, useEffect, and useState
- **Clean coding** approaches using test-driven development (TDD) and planning
- **Accessibility** considerations such as ARIA attributes

These coding challenges are not demonstrating impressive styling. Minimal
Tailwind is used to convey concepts.

Tools include:

- React
- Tailwind
- Vite and testing-library for user events and React

## Setup

To see this work locally:

1. Download the repo.
2. Run `pnpm dev` and see the components on the homepage of your `localhost`.
3. In another terminal window, run `pnpm test` to see the well-documented tests.

## Approach

For this exercise, I am coding with the TDD model, forming the test cases before
writing the code. This allows for verifying and always holding true the requirements.

**AI usage** is kept to a minimum to demonstrate human understanding. Copilot is turned off. All code and test cases are written by hand with some AI help for cases such as TypeScript typing.

The challenges are AI generated, but this text is not. :)

## Challenge Requirements

### 💻 React Fundamentals Challenge #1: Counter with Limits

Prompt:
Create a functional React component called LimitedCounter that:

Displays a count (0 by default).

Has Increment and Decrement buttons.

Does not allow the count to go below 0 or above 10.

Displays a warning message ("Limit reached") if the user tries to increment above 10 or decrement below 0.

Bonus:

Use a custom hook (useLimitedCounter) to manage the count logic.

## 🧪 Challenge #2: Interactive List Filter

📝 Prompt:
Build a React component called FruitFilter that:

Has a static array of fruit names (e.g., ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'])

Displays the list in a vertical column.

Includes a text input field.

Filters the list in real time based on user input.

Filtering should be case-insensitive.

If the list is empty after filtering, show: “No results found.”

✨ Bonus:
Highlight the matching part of the string in bold.

### 🧪 Challenge #3: Custom Modal with Outside Click Close

📝 Prompt
Create a React component called CustomModal that:

Opens when a user clicks a “Show Modal” button.

Closes when the user:

Clicks a Close button inside the modal.

Clicks outside the modal content.

Displays a simple message inside: "This is a modal!"

Locks keyboard focus within the modal when open (Bonus).

🎯 Functional Requirements:
The modal should be a full-screen overlay with a centered content box.

Clicking anywhere outside the modal content should close the modal.

Clicking inside the modal content should not close it.

Modal must not be rendered at all when closed (i.e., unmount it).

✨ Bonus Points:
Trap focus inside the modal (accessibility bonus)

Add keyboard ESC key support to close the modal
