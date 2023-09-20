import { useFormInput } from "./useFormInput";

export default function FormTwo() {
  const firstNameProps = useFormInput("Mary");
  const lastNameProps = useFormInput("Poppins");

  return (
    <>
      <label>
        First name:
        <input {...firstNameProps} />
      </label>
      <label>
        Last name:
        <input {...lastNameProps} />
      </label>
      <p><b>Good afternoon, {firstNameProps.value} {lastNameProps.value}</b></p>
    </>
  );
}
