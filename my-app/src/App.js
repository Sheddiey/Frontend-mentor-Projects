import ListItemsFunction from "./components/ListItems";
import MyButton from "./components/MyButton";
import MycounterButton from "./components/MyCounterButton";
import { useState } from "react";

export default function MyApp () {
  const [count, setCount] = useState(0)

    function handleClick2 () {
        setCount(count + 1);
    }

  return (
    <div>
      <h1>Welcome to My App</h1>
      <MyButton/>
      <ListItemsFunction/>
      <h1>Counters that update together</h1>
      <MycounterButton count={count} onClick = {handleClick2}/>
      <MycounterButton count={count} onClick = {handleClick2}/>
    </div>
  );
}

