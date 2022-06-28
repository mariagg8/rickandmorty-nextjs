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

export default function EpisodesCard() {
  const { data, loading, error } = useFetch(
    'https://rickandmortyapi.com/api/episode'
  );

  return (
    <CardWrapper>
      {loading && <div>Loading…</div>}
      {error && <StyledError>{error.message}</StyledError>}
      {data?.results.map(episode => (
        <StyledCard>
          <ul>
            <li>Name:{episode.name}</li>
            <li>Air date:{episode.air_date}</li>
            <li>Episode:{episode.episode}</li>
          </ul>
          <button>LIKE</button>
        </StyledCard>
      ))}
    </CardWrapper>
  );
}

export const StyledCard = styled.div`
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
