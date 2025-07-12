import { useState } from "react";

function useLimitedCounter(min: number = 0, max: number = 10) {
  const [count, setCount] = useState<number>(min);

  const handleIncrement = () => count < max && setCount(count + 1);

  const handleDecrement = () => count > min && setCount(count - 1);

  return { count, handleIncrement, handleDecrement };
}

export function LimitedCounter() {
  const { count, handleIncrement, handleDecrement } = useLimitedCounter();
  return (
    <div className="py-4">
      <p
        aria-label={`Count: ${count}`}
        id="count"
        className="text-3xl"
        aria-live="assertive"
      >
        {count}
      </p>
      <div className="flex flex-wrap gap-4 justify-between">
        <button
          className="disabled:text-gray-400 disabled:hover:cursor-not-allowed disabled:border-inherit"
          disabled={count === 0}
          onClick={handleDecrement}
          type="button"
          aria-controls="count"
        >
          Decrement
        </button>
        <button
          className="disabled:text-gray-400 disabled:hover:cursor-not-allowed disabled:border-inherit"
          disabled={count === 10}
          onClick={handleIncrement}
          type="button"
          aria-controls="count"
        >
          Increment
        </button>
      </div>
    </div>
  );
}
