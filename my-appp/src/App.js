export default function Signup() {
  return (
    <form className="toolbar" onSubmit={(e) => {
      e.preventDefault();
      alert("Submitting!");
    }}>
      <input />
      <button>send</button>
    </form>
  );
}