import { forwardRef, useImperativeHandle, useRef } from "react";

const MyInput = forwardRef((props, ref) => {
    const realInputRef = useRef(null);
    useImperativeHandle(ref, () => ({
        focus() {
            realInputRef.current.focus();
        },
    }));
    return <input {...props} ref={realInputRef} />
});

export default function FormTwo() {
    const inputRef = useRef(null);

    function handleClick() {
        inputRef.current.focus();
    }

    return (
        <>
            <MyInput ref={inputRef} />
            <button onClick={handleClick}>Focus the input</button>
        </>
    );
}