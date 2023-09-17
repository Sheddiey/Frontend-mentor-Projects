import { useEffect, useRef, useState } from "react";

function VideoPlayer({ src, isPLaying}) {
    const ref = useRef(null);

    useEffect(() => {
        if (isPLaying) {
            ref.current.play();
        } else {
            ref.current.pause();
        }
    });

return <video ref={ref} src= {src} loop playsInline/>
}

export default function VideoPlayerApp() {
    const [isPLaying, setIsPlaying] = useState(false);
    return (
        <>
            <button onClick={() => setIsPlaying(!isPLaying)}>
                {isPLaying ? 'pause' : 'play'}
            </button>
            <VideoPlayer isPLaying={isPLaying} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            />
        </>
    );
}