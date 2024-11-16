import { useState } from "react";

// Generalisere og gjenbruke

export function Oppgave08() {
  const [count, setCount] = useState(0);

  function incrementByNumber(num: number) {
    setCount(count + num);
  }

  return (
    <div>
      <p>{count}</p>
      <Counter incrementer={incrementByNumber} numToAdd={1} />
      <Counter incrementer={incrementByNumber} numToAdd={3} />
      <Counter incrementer={incrementByNumber} numToAdd={5} />
    </div>
  );
}

interface Props {
  incrementer: (num: number) => void;
  numToAdd: number;
}

export function Counter({ incrementer, numToAdd }: Props) {
  function handleClick() {
    incrementer(numToAdd);
  }

  return <button onClick={handleClick}>Add {numToAdd}</button>;
}
