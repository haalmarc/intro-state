import { useState, createContext, useContext, ReactNode } from "react";

// Global state - React Context

/*
  Vi ønsker:
  function DisplayCount() {
    const count = getCount()

    return <p>{count}</p>
  }

  function SetCount() {
    const add = setCount()

    return <button onClick={add}>Add</p>
  }



















*/

// Definerer hva vi ønsker å holde rede på
interface CounterContextType {
  count: number;
  incrementByNumber: (num: number) => void;
}

const CounterContext = createContext<CounterContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

// Definerer hva vi holder rede på
function CounterProvider({ children }: Props) {
  const [count, setCount] = useState(0);

  const incrementByNumber = (num: number) => {
    setCount(count + num);
  };

  return (
    <CounterContext.Provider value={{ count, incrementByNumber }}>
      {children}
    </CounterContext.Provider>
  );
}

/*




















*/

// Wrapper provider hvor vi ønsker å bruke globale verdier
export function Oppgave10() {
  return (
    <CounterProvider>
      <div>
        <DisplayCount />
        <FancyWrapping />
      </div>
    </CounterProvider>
  );
}

// Tar i bruk getter-verdien
function DisplayCount() {
  const context = useContext(CounterContext);
  return <p>{context?.count}</p>;
}

export function FancyWrapping() {
  return (
    <div>
      <h2>Hello</h2>
      <AnotherFancyWrapping />
    </div>
  );
}

export function AnotherFancyWrapping() {
  return (
    <div>
      <h2>world</h2>
      <Counter />
    </div>
  );
}

// Tar i bruk setter-funksjonen
export function Counter() {
  const context = useContext(CounterContext);

  function handleClick() {
    context?.incrementByNumber(1);
  }

  return <button onClick={handleClick}>Add 1</button>;
}
