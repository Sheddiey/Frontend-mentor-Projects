export default function Toolbar() {
  return (
    <div className="toolbar" onClick={() => {
      alert("You clicked on the toolbar!")
    }}>
      <button onClick={() => alert("Playing!")}>
        Play movie
      </button>
      <button onClick={() => alert("Uploading!")}>
        Upload image
      </button>
    </div>
  );
}