import { useRef, useState } from "react";
import { useFadeIn } from "./useFadeIn";

function Welcome() {
    const ref = useRef(null);

    useFadeIn(ref, 1000)

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