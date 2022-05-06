import styled from 'styled-components';
import Navbar from '../component/navbar';
import Card from '../component/card';
import Header from '../component/header';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <>
      <Header></Header>
      <section>
        <Card></Card>
      </section>

      <Navbar></Navbar>
    </>
  );
}
