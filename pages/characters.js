import Navbar from '../component/navbar';
import Card from '../component/card';
import styled from 'styled-components';

export default function Characters() {
  return (
    <>
      <StyledHeader>
        <h1>Characters</h1>
      </StyledHeader>

      <Card></Card>
      <Navbar></Navbar>
    </>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;
