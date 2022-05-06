import styled from 'styled-components';
import Navbar from '../component/navbar';
import Card from '../component/card';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <>
      <h1>Rick and Morty Api Wiki</h1>
      <section>
        <Card></Card>
      </section>

      <Navbar></Navbar>
    </>
  );
}
