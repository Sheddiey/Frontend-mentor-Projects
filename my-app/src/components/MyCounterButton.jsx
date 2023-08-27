
function MycounterButton ({count, onClick}) {
    
    return (
        <button onClick={onClick}>
            clicked {count} times.
        </button>
    );
}

export default MycounterButton;