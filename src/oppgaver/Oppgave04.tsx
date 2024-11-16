import { useState } from "react";

// Overskrive verdi med setState

export function Oppgave04() {
  const [team, setTeam] = useState(["marcus"]);

  function handleClick() {
    setTeam([...team, "kjetil"]);
    console.log(team);
  }

  return (
    <div>
      <button onClick={handleClick}>Add</button>
      <p>Team: {team.join(", ")}</p>
    </div>
  );
}
