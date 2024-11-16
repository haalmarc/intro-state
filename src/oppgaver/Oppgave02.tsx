import { useState } from "react";

// Counter med useState

export function Oppgave02() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }

  return <button onClick={handleClick}>Count: {count}</button>;
}
