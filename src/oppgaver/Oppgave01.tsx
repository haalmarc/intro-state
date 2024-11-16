// Hvorfor state?
// ... og holder det ikke med let?

export function Oppgave01() {
  let count = 0;

  function handleClick() {
    count = count + 1;
    console.log(count);
  }

  return <button onClick={handleClick}>Count: {count}</button>;
}
