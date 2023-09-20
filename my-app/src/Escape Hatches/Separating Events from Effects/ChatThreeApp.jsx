import { useEffect, useState } from "react";
import { createConnection } from "./ChatThree";

const serverUrl = "https://localhost:1234";

function ChatRoom({ roomId }) {
  const [messages, setMessages] = useState("");

  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);

  return (
    <>
      <h1>Welcome to the {roomId} room!</h1>
      <input value={messages} onChange={(e) => setMessages(e.target.value)} />
    </>
  );
}

export default function ChatThreeApp() {
  const [roomId, setRoomId] = useState("general");
  return (
    <>
      <label>
        Choose the chat room:{" "}
        <select value={roomId} onChange={(e) => setRoomId(e.target.value)}>
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
        <hr />
        <ChatRoom roomId={roomId} />
      </label>
    </>
  );
}
