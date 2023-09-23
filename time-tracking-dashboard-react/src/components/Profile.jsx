import jeremy from "./images/image-jeremy.png";
export function Profile({onClick}) {
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
        <p onClick={onClick}>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
      </div>
    </div>
  );
}
