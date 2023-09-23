import { Card } from "./Card";
import React, { useState } from "react";
import { Profile } from "./Profile";

export default function DashBoard() {
  const [period, setPeriod] = useState('weekly');

  function handleDailyClick(e) {
    setPeriod('daily');
  }

  return (
    <>
      <div className="flex-container">
        <Profile onClick={handleDailyClick}/>
        <Card period={period} />
      </div>
    </>
  );
}
