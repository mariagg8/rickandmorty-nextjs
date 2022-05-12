import styled from 'styled-components';
import Navbar from '../component/navbar';
import Card from '../component/card';
import Header from '../component/header';
import Form from '../component/form';
const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <>
      <Header></Header>
      <section>
        <h2>Welcome to your Rick and Morty Database</h2>
        <p>Explore Now</p>
      </section>
      <Form></Form>

      <Navbar></Navbar>
    </>
  );
}
