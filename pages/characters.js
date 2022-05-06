import Link from 'next/Link';
import { StyledButton } from '../component/button';
import { StyledNavbar } from '../component/navbar';

export default function Characters() {
  return (
    <>
      <h1>Characters</h1>
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
