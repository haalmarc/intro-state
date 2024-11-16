/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";

// Endre variabel direkte

export function Oppgave03() {
  const [team, setTeam] = useState(["marcus"]);

  function handleClick() {
    team.push("kjetil");
    console.log(team);
  }

  return (
    <div>
      <button onClick={handleClick}>Add</button>
      <p>Team: {team.join(", ")}</p>
    </div>
  );
}
