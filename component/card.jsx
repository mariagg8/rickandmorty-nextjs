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
  return (
    <CardWrapper>
      {loading && <div>Loading…</div>}
      {error && <StyledError>{error.message}</StyledError>}
      {data?.results.map(character => (
        <StyledCard>
          <ul>
            <li>Name:{character.name}</li>
            <li>Status:{character.status} </li>
            <li>Species:{character.species} </li>
            <li>Type:{character.type}</li>
            <li>Gender:{character.gender} </li>
            <li>Origin:{character.origin.name}</li>
            <li>Location:{character.location.name}</li>
            <img
              src={character.image}
              style={{ width: '100px', height: '100px' }}
            ></img>
          </ul>
          <StyledButton onClick={like}>LIKE</StyledButton>
        </StyledCard>
      ))}
    </CardWrapper>
  );
}

function like() {
  alert('I was clicked');
}

const StyledButton = styled.button`
  color: white;
  background-color: #5151a3;
`;

const StyledCard = styled.div`
  background-color: #fcfcfc;
  width: 300px;
  height: 300px;
  border-radius: 25px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: space-around;
  justify-content: center;
  gap: 20px;
`;
