import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <h1>Rick and Morty App</h1>
    </StyledHeader>
  );
}

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;
