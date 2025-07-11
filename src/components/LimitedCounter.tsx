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
      <p data-testid="count" className="text-3xl">
        {count}
      </p>
      <div className="flex flex-wrap gap-4 justify-between">
        <button
          className="disabled:text-gray-400 disabled:hover:cursor-not-allowed disabled:border-inherit"
          disabled={count === 0}
          onClick={handleDecrement}
          type="button"
        >
          Decrement
        </button>
        <button
          className="disabled:text-gray-400 disabled:hover:cursor-not-allowed disabled:border-inherit"
          disabled={count === 10}
          onClick={handleIncrement}
          type="button"
        >
          Increment
        </button>
      </div>
    </div>
  );
}
