import Panel from "./Panel";
import { getImageUrl } from "./utils";


export default function Profile({ person }) {
    return(
        <Panel>
            <Header person={person}/>
            <Avatar person={person}/>
        </Panel>
    )
}

function Header({ person }) {
    return <h1>{person.name}</h1>
}

function Avatar({ person }) {
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={50}
            height={50}
        />
    );
}