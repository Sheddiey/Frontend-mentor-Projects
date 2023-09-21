import { useState } from "react";
import "./welcome.css";

function Welcome() {
  return <h1 className="welcome">Welcome Yall</h1>;
}

export default function AnimationApp() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button onClick={() => setShow(!show)}>{show ? "Remove" : "Show"}</button>
      <hr />
      {show && <Welcome />}
    </>
  );
}
