import { Card } from "./Card";
import { Profile } from "./Profile";
import data from "./data.json";
import React from "react";

export default function DashBoard() {

  return (
    <>
      <div>
        <Profile />
        <Card></Card>
      </div>
    </>
  );
}
