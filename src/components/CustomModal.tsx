/*
Test Plan:
- Has a 'Show Modal' button
- Clicking the 'Show Modal' button renders
an element with id 'modal'
  - Use state to set boolean to true
- Modal displays 'This is a modal!'
  - When open, check document content for string
- Close button renders only when modal is open
  - Place close button inside the modal
- Close button unrenders the modal
  - Use state to set boolean to false
- Clicking outside modal closes modal
  - There is an outside screen that is clickable
  - Note: Not testing styles, so not 100% verifying that 
  anything outside is clickable.
- Clicking inside modal other than button keeps modal open

Bonus:
- Locks keyboard focus when open
  - Tab keyboard focus multiple times
  - See that focus stays on close button
- Accessibility: buttons have appropriate aria-attributes
*/
import { useState, useRef, useEffect, useCallback } from "react";

export default function CustomModal() {
  const [expanded, setExpanded] = useState<boolean>(false);
  const modal = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape" && expanded) {
        setExpanded(false);
      }
      if (event.key === "Tab" && expanded) {
        event.preventDefault();
        if (closeButton.current) {
          closeButton.current.focus();
        }
      }
    },
    [expanded]
  );

  useEffect(() => {
    if (expanded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [expanded, handleKeyDown]);

  return (
    <>
      <button onClick={() => setExpanded(true)} type="button">
        Show Modal
      </button>
      {expanded && (
        <div
          data-testid="screen"
          className="overflow-hidden fixed inset-0 bg-gray-600/90 flex justify-center items-center"
          onClick={(event) => {
            if (event.target !== modal.current) {
              setExpanded(false);
            }
          }}
        >
          <div
            className="p-16 flex justify-center items-center relative bg-white rounded-2xl w-9/10 max-w-xl min-h-1/2"
            data-testid="modal"
            ref={modal}
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <p id="modal-title">This is a modal!</p>
            <button
              className="absolute top-4 right-4"
              type="button"
              onClick={() => setExpanded(false)}
              ref={closeButton}
            >
              Close Modal
            </button>
          </div>
        </div>
      )}
    </>
  );
}
