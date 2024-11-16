import { useState } from "react";

// Løfte state

export function Oppgave07() {
  const [count, setCount] = useState(0);

  function incrementByNumber(num: number) {
    setCount(count + num);
  }

  return (
    <div>
      <p>{count}</p>
      <Counter incrementer={incrementByNumber} />
    </div>
  );
}

interface Props {
  incrementer: (num: number) => void;
}

export function Counter({ incrementer }: Props) {
  function handleClick() {
    incrementer(1);
  }

  return <button onClick={handleClick}>Add</button>;
}
