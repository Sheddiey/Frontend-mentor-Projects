import { levelContext } from "./LevelContext";

export default function Section({ level, children }) {
  return (
    <section className="section">
      <levelContext.Provider value={level}>
        {children}
      </levelContext.Provider>
    </section>
  );
}
