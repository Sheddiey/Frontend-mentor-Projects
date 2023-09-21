import { useEffect, useRef, useState } from "react";

function Welcome() {
    const ref = useRef(null);

    useEffect(() => {
        const duration = 2000;
        const node = ref.current;

        let startTime = performance.now();
        let frameId = null;

        function onFrame(now) {
            const timePassed = now - startTime;
            const progress = Math.min(timePassed / duration, 1);
            onProgress(progress);
            if (progress < 1) {
                frameId = requestAnimationFrame(onFrame);
            }
        }

        function onProgress(progress) {
            node.style.opacity = progress;
        }

        function start() {
            onProgress(0);
            startTime = performance.now();
            frameId = requestAnimationFrame(onFrame);
        }
        function stop() {
            cancelAnimationFrame(frameId);
            startTime = null;
            frameId = null;
        }

        start()
        return () => stop();
    }, []);

    return <h1 className="welcome" ref={ref}>
        Welcome Yall
    </h1>
}

export default function AnimationApp() {
    const [show, setShow] = useState(false);
    return (
        <>
            <button onClick={() => setShow(!show)}>
                {show ? 'Remove' : 'Show'}
            </button>
            <hr />
            {show && <Welcome />}
        </>
    );
}