import { useState } from 'react';
import styled from 'styled-components';

function usePage(initialPage, lastPage) {
  const [currentPage, setCurrentPage] = useState(initialPage);
  fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    });

  function nextPage() {
    setCurrentPage(currentPage + 1);
  }

  function prevPage() {
    setCurrentPage(currentPage - 1);
  }
  return { currentPage, nextPage, prevPage };
}
//function useCounter(initialCounter, maxCounter) {
// const [counter, setCounter] = useState(initialCounter);

//function increment() {
//setCounter(counter + 1);
// }

// function decrement() {
//   setCounter(counter - 1);
// }
// return { counter, increment, decrement };
//}

//export default function Hooks() {

//const {counter, increment, decrement} = useCounter(100)

// return(
//  <>
// <h1>Hooks</h1>
// <button onClick={decrement}>-</button>
// <span>{counter}</span>
// <button onClick={increment}>+</button>
//  </>
// )
//}
export default function Hooks(data) {
  const { currentPage, nextPage, prevPage } = usePage(0);

  return (
    <>
      <h1>Hooks</h1>
      <button onClick={prevPage}>previous page</button>
      <StyledSpan>{currentPage}</StyledSpan>
      <button onClick={nextPage}>next page</button>
    </>
  );
}

const StyledSpan = styled.span`
  color: white;
`;
