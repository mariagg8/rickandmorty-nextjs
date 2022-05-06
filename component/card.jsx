import styled from 'styled-components';
import useFetch from '../hooks/fetch';

export default function Card() {
  const { data, loading, error } = useFetch(
    'https://rickandmortyapi.com/api/character'
  );
  console.log(data);
  return (
    <div>
      {loading && <div>Loading…</div>}
      {error && <div>{error.message}</div>}
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
          </ul>
        </StyledCard>
      ))}
    </div>
  );
}

export const StyledCard = styled.div`
  background-color: yellow;
  width: 250px;
  height: 250px;
  border-radius: 25px;
`;
