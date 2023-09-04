let guest = 0;

function Cup () {
  //bad: changing a pre existing variable
  guest = guest + 1;
  return <h2>Tea cup for guest #{guest}</h2>
}

export default function TeaSet() {
  return (
    <>
      <Cup />
      <Cup />
      <Cup />
    </>
  );
}
