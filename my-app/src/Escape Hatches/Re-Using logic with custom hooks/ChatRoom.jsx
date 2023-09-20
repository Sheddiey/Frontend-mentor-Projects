import { useEffect, useState } from "react";
import { createConnection } from "./chat";
import { showNotification } from "./notification";

export default function ChatRoom({ roomId }) {
    const [serverUrl, setServerUr] = useState('https://localhost:1234');

    useEffect(() => {
        const options = {
            serverUrl: serverUrl,
            roomId: roomId
        };
        const connection = createConnection(options);
        connection.on('message', (msg) => {
            showNotification('New message: ' + msg);
        });
        connection.connect();
        return () => connection.disconnect();
    }, [roomId, serverUrl]);

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