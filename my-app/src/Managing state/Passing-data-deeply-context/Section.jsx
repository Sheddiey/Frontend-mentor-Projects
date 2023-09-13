import { useContext } from "react";
import { levelContext } from "./LevelContext";

export default function Section({ children }) {
    const level = useContext(levelContext);
  return (
    <section className="section">
      <levelContext.Provider value={level + 1}>
        {children}
      </levelContext.Provider>
    </section>
  );
}
