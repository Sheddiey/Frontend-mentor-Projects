import { useEffect, useRef, useState } from "react";

function VideoPlayer({ src, isPLaying }) {
  const ref = useRef(null);

  useEffect(() => {
    if (isPLaying) {
      console.log("calling video.play()");
      ref.current.play();
    } else {
      console.log("calling video.pause()");
      ref.current.pause();
    }
  }, [isPLaying]);

  return <video ref={ref} src={src} loop playsInline />;
}

export default function VideoPlayerApp() {
  const [isPLaying, setIsPlaying] = useState(false);
  const [text, setText] = useState("");
  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => setIsPlaying(!isPLaying)}>
        {isPLaying ? "pause" : "play"}
      </button>
      <VideoPlayer
        isPLaying={isPLaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
