import { useState } from "react";

export const App = () => {
  const [counter, setCounter] = useState(0);

  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  const setToZero = () => setCounter(0);

  return (
    <>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={setToZero}>Set to zero</button>
      {counter}
    </>
  );
};
