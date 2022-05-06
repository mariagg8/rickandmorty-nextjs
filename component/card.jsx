import styled from 'styled-components';

export default function Card() {
  return (
    <StyledCard>
      <ul>
        <li>Name: </li>
        <li>Status </li>
      </ul>
    </StyledCard>
  );
}

export const StyledCard = styled.div`
  background-color: yellow;
  width: 250px;
  height: 250px;
  border-radius: 25px;
`;
