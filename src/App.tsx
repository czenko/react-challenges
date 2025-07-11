import "./App.css";
import { LimitedCounter } from "./components/LimitedCounter";
import FruitFilter from "./components/FruitFilter";
import CustomModal from "./components/CustomModal";

function App() {
  return (
    <div className="flex flex-col gap-20">
      <section>
        <h1 className="text-t3 uppercase font-semibold border-b border-gray-300">
          Challenges
        </h1>
        <p>See the README for the requirements of each challenge.</p>
      </section>

      <section>
        <h2 className="text-2xl font-bold"> #1: Limited Counter</h2>
        <LimitedCounter />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">#2: Interactive List Filter</h2>
        <FruitFilter />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">
          #3: Custom Modal with Outside Click Close
        </h2>
        <CustomModal />
      </section>
    </div>
  );
}

export default App;
