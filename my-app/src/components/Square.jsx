function Square({ value, onSquareClick }) {
  return (
    <button className="square btn" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default Square;
