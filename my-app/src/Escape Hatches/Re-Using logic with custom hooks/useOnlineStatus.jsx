import { useSyncExternalStore } from "react";

function subscribe(callback) {
    window.addEventListener('online', callback);
    window.addEventListener('offline', callback);
    return () => {
        window.removeEventListener('online', callback);
        window.removeEventListener('offline', callback);
    };
}

export default function useOnlineStatus() {
    return useSyncExternalStore(
        subscribe,
        () => navigator.onLine,
        () => true
    );
}