import { useEffect, useState } from "react";

export default function StatusBar() {
    const [isOnline, setIsOnline] = useState(true);
    useEffect(() => {
        function handleOnline() {
            setIsOnline(true);
        }
        function handleOffline() {
            setIsOnline(false);
        }
        window.addEventListener('online', handleOnline);
        window.addEventListener('offline', handleOffline);
        return () => {
            window.addEventListener('online', handleOnline);
            window.addEventListener('offline', handleOffline);
        };
    }, []);

    return <h1>{isOnline ? '✅ Online' : '❌ Disconnected'}</h1>

}