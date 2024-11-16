/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

// Artighet med setteren
// ...verdien endres, men det er setteren som trigger GUI-oppdatering

export function Oppgave05() {
  const [team, setTeam] = useState(["marcus"]);
  const [count, setCount] = useState(0);

  function handleClick() {
    team.push("kjetil");
    setCount(count + 1);
    console.log(team);
  }

  return (
    <div>
      <button>Count: {count}</button>
      <button onClick={handleClick}>Add</button>
      <p>Team: {team.join(", ")}</p>
    </div>
  );
}
