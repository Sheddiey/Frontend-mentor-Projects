import { useState } from "react";

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    setInterval(() => {
      setNow(Date.now());
    }, 1);
  }

  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 100;
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(100)}</h1>
      <button onClick={handleStart}>Start</button>
    </>
  );
}
