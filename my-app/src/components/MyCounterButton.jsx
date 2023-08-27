import { useState } from "react";

function MycounterButton () {
    const [count, setCount] = useState(0)

    function handleClick2 () {
        setCount(count + 1);
    }
    return (
        <button onClick={handleClick2}>
            clicked {count} times.
        </button>
    );
}

export default MycounterButton;