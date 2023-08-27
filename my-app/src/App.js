import ListItemsFunction from "./components/ListItems";
import MyButton from "./components/MyButton";
import MycounterButton from "./components/MyCounterButton";

export default function MyApp () {
  return (
    <div>
      <h1>Welcome to My App</h1>
      <MyButton/>
      <ListItemsFunction/>
      <MycounterButton/>
    </div>
  );
}

