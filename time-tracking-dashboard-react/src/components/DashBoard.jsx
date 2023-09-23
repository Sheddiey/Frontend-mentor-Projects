import { Card } from "./Card";
import React, { useState } from "react";
import { Profile } from "./Profile";

export default function DashBoard() {
  const [period, setPeriod] = useState("weekly");

  function handleDailyClick() {
    setPeriod("daily");

  }
  function handleWeeklyClick() {
    setPeriod("weekly");
  }
  function handleMonthlyClick() {
    setPeriod("monthly");
  }

  return (
    <>
      <div className="flex-container">
        <Profile
          onClickDaily={handleDailyClick}
          onClickWeekly={handleWeeklyClick}
          onClickMonthly={handleMonthlyClick}
          period={period}
        />
        <Card period={period} />
      </div>
    </>
  );
}
