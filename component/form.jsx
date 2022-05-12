import styled from 'styled-components';

function submitHandler(event) {
  event.preventDefault();
  console.log(event.target);
  const formData = new FormData(event.target);
  const formValues = Object.fromEntries(formData);
  console.log(formValues);
  fetch('/api/user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formValues),
  });
}

export default function Form() {
  return (
    <StyledForm onSubmit={submitHandler}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <label>
        <input htmlFor> Age:</input>
        <input type="number" id="age" name="age" />
      </label>
      <button type="submit">Submit</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 20rem;
  margin: auto;
`;
