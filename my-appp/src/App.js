function Recipe ({ drinkers }) {
  return (
    <ol>
      <li>Boil {drinkers} cups of water</li>
      <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice</li>
      <li>Add {0.5 * drinkers} cup of milk to boil and sugar to taste</li>
    </ol>
  );
}

export default function App() {
  return (
    <section>
      <h1>Spiced Chai recipe</h1>
      <h2>For two</h2>
      <Recipe drinkers={2} />
      <h2>For a gathering</h2>
      <Recipe drinkers={4} />
      <h2>For a Ruracio</h2>
      <Recipe drinkers={10} />
    </section>
  );
}