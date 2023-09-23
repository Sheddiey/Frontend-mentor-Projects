import ellipsis from "./images/icon-ellipsis.svg";
import { data } from "./data";
import { backgroundColors } from "./data";

export function Card({ period }) {
  const daily = period === "daily";
  const weekly = period === "weekly";
  const monthly = period === "monthly";


  

  return (
    <div className="grid-container">
      {data.map((data, index) => {
        const backgroundColor = backgroundColors[index];
        return (
          <div
            className="grid-item"
            key={data.title}
            style={{ backgroundColor: backgroundColor }}
          >
            <div className="bg-icon-container">
              <img className="bg-icon" src={data.src} alt={data.title} />
            </div>
            <div className="dark-blue">
              <div className="flex-space-between">
                <p>{data.title}</p>
                <img src={ellipsis} alt="icon-ellipsis" />
              </div>
              <div className="flex-mobile">
                <h1>{data.timeframes.weekly.current}hrs</h1>
                <p>Last Week - {data.timeframes.weekly.previous}hrs</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
