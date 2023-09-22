export function Card({ src, alt, previous, current, title }) {
  return (
    <>
      <div className="container">
        <img src={src} alt={alt} />
        <div className="flex-space-between">
          <p>{title}</p>
          <img src="/public/images/icon-ellipsis.svg" alt="icon-ellipsis" />
        </div>
        <h1>{current}</h1>
        <p>Last Week - {previous}</p>
      </div>
    </>
  );
}
