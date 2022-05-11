import styled from 'styled-components';
import useFetch from '../hooks/fetch';

const StyledError = styled.div`
  background: red;
  color: white;
  padding: 2rem;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
`;

export default function Card() {
  const { data, loading, error } = useFetch(
    'https://rickandmortyapi.com/api/character'
  );
  console.log(data);

  //calling async function from products.js
  async function Handler(character) {
    const res = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    });
    const message = await res.json();
    console.log(message);
  }

  return (
    <CardWrapper>
      {loading && <div>Loading…</div>}
      {error && <StyledError>{error.message}</StyledError>}
      {data?.results.map(character => (
        <StyledCard>
          <StyledList>
            <img src={character.image} style={{ width: '50%' }}></img>
            <h3>Name:{character.name}</h3>
            <li>Status:{character.status} </li>
            <li>Species:{character.species} </li>
            <li>Type:{character.type}</li>
            <li>Gender:{character.gender} </li>
            <li>Origin:{character.origin.name}</li>
            <li>Location:{character.location.name}</li>
            <StyledButton
              onClick={() => {
                Handler(character);
              }}
            >
              Add Character
            </StyledButton>
          </StyledList>
        </StyledCard>
      ))}
    </CardWrapper>
  );
}

function like() {
  alert('I was clicked');
}

const StyledList = styled.ul`
  list-style-type: none;
`;

const StyledButton = styled.button`
  color: white;
  background-color: #5151a3;
  padding: 10px;
  border-radius: 10px;
`;

const StyledCard = styled.div`
  background-color: #fcfcfc;
  width: 360px;
  height: 360px;
  border-radius: 25px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: center;
  gap: 20px;
`;
