import { useState } from "react";
import { useChatRoom } from "./useChatRoom";

export default function ChatRoom({ roomId }) {
    const [serverUrl, setServerUr] = useState('https://localhost:1234');

   useChatRoom({
    roomId: roomId,
    serverUrl: serverUrl
   });

    return (
        <>
            <label>
                server URL:
                <input value={serverUrl} onChange={e => setServerUr(e.target.value)} />
            </label>
            <h1>Welcome to the {roomId} room!</h1>
        </>
    );
}