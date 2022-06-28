import styled from 'styled-components';
import Navbar from '../component/navbar';
import Card from '../component/card';
import Header from '../component/header';
import Form from '../component/form';
import { useSession, signIn, signOut } from 'next-auth/react';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
        <Form></Form>
        <Navbar></Navbar>
      </>
    );
  }

  return (
    <>
      <Header></Header>
      <section>
        <h2>Welcome to your Rick and Morty Database</h2>
        <p>Explore Now</p>
        <button onClick={() => signIn('github')}>Sign in with GitHub</button>
        <button onClick={() => signIn('google')}>Sign in with Google</button>
      </section>
    </>
  );
}
