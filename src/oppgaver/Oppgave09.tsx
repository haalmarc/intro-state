import { useState } from "react";

// Propdrilling

export function Oppgave09() {
  const [count, setCount] = useState(0);

  function incrementByNumber(num: number) {
    setCount(count + num);
  }

  return (
    <div>
      <p>{count}</p>
      <FancyWrapping incrementer={incrementByNumber} numToAdd={1} />
    </div>
  );
}

export function FancyWrapping({ incrementer, numToAdd }: Props) {
  return (
    <div>
      <h2>Hello</h2>
      <AnotherFancyWrapping incrementer={incrementer} numToAdd={numToAdd} />
    </div>
  );
}

export function AnotherFancyWrapping({ incrementer, numToAdd }: Props) {
  return (
    <div>
      <h2>world</h2>
      <Counter incrementer={incrementer} numToAdd={numToAdd} />
    </div>
  );
}

export function Counter({ incrementer, numToAdd }: Props) {
  function handleClick() {
    incrementer(numToAdd);
  }

  return <button onClick={handleClick}>Add {numToAdd}</button>;
}

interface Props {
  incrementer: (num: number) => void;
  numToAdd: number;
}
