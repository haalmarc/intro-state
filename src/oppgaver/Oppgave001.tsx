import { useState } from "react";

export function Oppgave001() {
  // Definer flere state-variabler
  const [count, setCount] = useState(0);
  const [name, setName] = useState("React");
  const [items, setItems] = useState<string[]>([]);
  const [isVisible, setIsVisible] = useState(true);

  // Funksjon for å håndtere knappetrykk for å øke teller
  function increment() {
    setCount(count + 1);
  }

  // Funksjon for å bytte navn
  function toggleName() {
    setName((prevName) => (prevName === "React" ? "State" : "React"));
  }

  // Funksjon for å legge til element i listen
  function addItem() {
    setItems([...items, `Item ${items.length + 1}`]);
  }

  // Funksjon for å vise/gjemme elementer
  function toggleVisibility() {
    setIsVisible(!isVisible);
  }

  return (
    <div>
      <h1>Eksempler på state-håndtering</h1>
      <label>
        Form
        <input />
      </label>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <p>Current Name: {name}</p>
      <button onClick={toggleName}>Toggle Name</button>
      <p>Items:</p>
      {isVisible && (
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      <button onClick={addItem}>Add Item</button>
      <button onClick={toggleVisibility}>
        {isVisible ? "Hide Items" : "Show Items"}
      </button>
    </div>
  );
}
