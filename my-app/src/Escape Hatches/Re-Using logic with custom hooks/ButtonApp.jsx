import useOnlineStatus from "./useOnlineStatus";

function StatusBar() {
  const isOnline = useOnlineStatus();
  return <h1>{isOnline ? "✅ Online" : "❌ Disconnected"}</h1>;
}
function SaveButton() {
  const isOnline = useOnlineStatus();

  function handleSaveClick() {
    alert("✅ Progress saved");
  }
  return (
    <button disabled={!isOnline} onClick={handleSaveClick}>
      {isOnline ? "Save progress" : "Reconnecting..."}
    </button>
  );
}
export default function ButtonApp() {
  return (
    <>
      <SaveButton />
      <StatusBar />
    </>
  );
}
