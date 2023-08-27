function MyButton () {
    function handleClick () {
        alert('You clicked me!')
    }

    return (
        <>        
        <button>I am a button</button>
        <button onClick={handleClick}>
            Click me.
        </button>
        </>
    );
}

export default MyButton;