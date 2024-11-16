import { useState } from "react";

// State er isolert per komponent

export function Oppgave06() {
  return (
    <div>
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
}

export function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }

  return <button onClick={handleClick}>Count: {count}</button>;
}
