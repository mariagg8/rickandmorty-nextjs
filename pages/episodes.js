import EpisodesCard from '../component/episodesCard';
import Navbar from '../component/navbar';
import styled from 'styled-components';

export default function Episodes() {
  return (
    <>
      <StyledHeader>
        <h1>Episodes</h1>
      </StyledHeader>

      <EpisodesCard></EpisodesCard>
      <Navbar></Navbar>
    </>
  );
}

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
`;
