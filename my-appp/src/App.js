function AlertButton({ children, message }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="playing!">Play Movie</AlertButton>
      <AlertButton message="uploading!">Upload image</AlertButton>
      </div>
  );
}
