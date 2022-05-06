import styled from 'styled-components';
import Link from 'next/link';
import { StyledButton } from '../component/button';
import { StyledNavbar } from '../component/navbar';

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export default function Home() {
  return (
    <>
      <h1>Rick and Morty Api Wiki</h1>
      <StyledNavbar>
        <Link passHref href="/">
          <StyledButton as="a">Home</StyledButton>
        </Link>
        <Link passHref href="/characters">
          <StyledButton as="a">Characters</StyledButton>
        </Link>
        <Link passHref href="/episodes">
          <StyledButton as="a">Episodes</StyledButton>
        </Link>
      </StyledNavbar>
    </>
  );
}
