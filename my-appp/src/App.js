export default  function App() {
  return (
    <Toolbar 
      onPlayMovie={() => alert("Playing!")}
      onUploadImage={() => alert("Uploading image")}
    />
  );
}

function Toolbar({onPlayMovie, onUploadImage}) {
  return (
    <>
      <Button onClick={onPlayMovie}>
        Play movie
      </Button>
      <Button onClick={onUploadImage}>
        Upload image
      </Button>
    </>
  );
}

function Button({ onClick, children }) {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
}