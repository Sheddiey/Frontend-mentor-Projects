import { useState } from "react";

export default function Form() {
    const [firstName, setFirstName] = useState('Mary');
    const [lastName, setLastName] = useState('Poppins');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    return (
        <>
            <label>
                First Name:
                <input value={firstName} onChange={handleFirstNameChange} />
            </label>
            <label>
                Last Name:
                <input value={lastName} onChange={ handleLastNameChange} />
            </label>
            <p><b>Hello {firstName} {lastName}. How are you this afternoon.</b></p>
        </>
    );
}