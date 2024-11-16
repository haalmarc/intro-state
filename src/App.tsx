import "./App.css";
import "react-datepicker/dist/react-datepicker.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Oppgave01 } from "./oppgaver/Oppgave01";
import { Layout } from "./components/Layout";

import { Oppgave02 } from "./oppgaver/Oppgave02";
import { Oppgave03 } from "./oppgaver/Oppgave03";
import { Oppgave04 } from "./oppgaver/Oppgave04";
import { Oppgave05 } from "./oppgaver/Oppgave05";
import { Oppgave06 } from "./oppgaver/Oppgave06";
import { Oppgave07 } from "./oppgaver/Oppgave07";
import { Oppgave08 } from "./oppgaver/Oppgave08";
import { Oppgave09 } from "./oppgaver/Oppgave09";
import { Oppgave10 } from "./oppgaver/Oppgave10";
import { Oppgave001 } from "./oppgaver/Oppgave001";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Oppgave01 />} />

          <Route path="opg001" element={<Oppgave001 />} />
          <Route path="opg2" element={<Oppgave02 />} />
          <Route path="opg3" element={<Oppgave03 />} />
          <Route path="opg4" element={<Oppgave04 />} />
          <Route path="opg5" element={<Oppgave05 />} />
          <Route path="opg6" element={<Oppgave06 />} />
          <Route path="opg7" element={<Oppgave07 />} />
          <Route path="opg8" element={<Oppgave08 />} />
          <Route path="opg9" element={<Oppgave09 />} />
          <Route path="opg10" element={<Oppgave10 />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}
