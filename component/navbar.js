import styled from 'styled-components';
import Link from 'next/link';
import { StyledButton } from './button';

export default function Navbar() {
  return (
    <>
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

export const StyledNavbar = styled.nav`
  display: flex;
  position: fixed;
  justify-content: space-around;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: yellow;
`;
