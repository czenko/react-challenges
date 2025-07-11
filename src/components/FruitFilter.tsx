import { useState } from "react";

export default function FruitFilter() {
  const fruits: string[] = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];
  const [filtered, setFiltered] = useState(fruits);
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    setFiltered(
      fruits.filter((fruit) =>
        fruit.toLowerCase().includes(newValue.toLowerCase())
      )
    );
  };
  return (
    <div className="flex flex-col gap-4">
      <input
        type="text"
        className="border border-gray-500 rounded p-2 max-w-lg block mx-auto"
        placeholder="Filter Fruits"
        onChange={handleChange}
        value={value}
        aria-controls="results"
      />
      {filtered.length > 0 ? (
        <ul aria-live="polite" id="results">
          {filtered.map((fruit) => (
            <li key={fruit}>{fruit}</li>
          ))}
        </ul>
      ) : (
        <p id="results">No results found</p>
      )}
    </div>
  );
}
