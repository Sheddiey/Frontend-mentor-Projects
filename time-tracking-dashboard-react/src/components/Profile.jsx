import jeremy from "./images/image-jeremy.png";
export function Profile({
  onClickDaily,
  onClickWeekly,
  onClickMonthly,
  period,
}) {
  return (
    <div className="profile">
      <div className=" profile-top">
        <img className="jeremy" src={jeremy} alt="Jeremy" />
        <div>
          <p>Report for</p>
          <h1>Jeremy Robson</h1>
        </div>
      </div>
      <div className="period">
        <p
          onClick={onClickDaily}
          style={{ color: period === "daily" ? "white" : "hsl(235, 45%, 61%)" }}
        >
          Daily
        </p>
        <p
          onClick={onClickWeekly}
          style={{
            color: period === "weekly" ? "white" : "hsl(235, 45%, 61%)",
          }}
        >
          Weekly
        </p>
        <p
          onClick={onClickMonthly}
          style={{
            color: period === "monthly" ? "white" : "hsl(235, 45%, 61%)",
          }}
        >
          Monthly
        </p>
      </div>
    </div>
  );
}
