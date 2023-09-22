import jeremy from './images/image-jeremy.png'
export function Profile() {
  return (
    <>
      <div>
        <img src={jeremy} alt="Jeremy" />
        <p>Report for</p>
        <h1>Jeremy Robson</h1>
      </div>
      <div>
        <p>Daily</p>
        <p>Weekly</p>
        <p>Monthly</p>
      </div>
    </>
  );
}
