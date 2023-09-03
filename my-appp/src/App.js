import { people } from "./data";
import { getImageUrl } from "./utils";
import "./App.css"



export default function Lists() {
  const listItems = people.map(person => 
      <li key={person.id}>
        <img
          className="avatar"
          src={getImageUrl(person)}
          alt={person.name}
        />
        <p>
          <b>{person.name}:</b>
          {' ' + person.profession + ' '}
          known foor {person.accomplishment}
        </p>
      </li>
    );
    return (
        <article>
          <h1>Scientists</h1>
          <ul>{listItems}</ul>
        </article>
      );
}