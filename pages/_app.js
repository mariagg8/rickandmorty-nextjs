import { createGlobalStyle, ThemeProvider } from 'styled-components';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #242331;
    
  }
  h1{
    color: white;
    font-family: 'Lobster', 'cursive';
 
  }

  h2{
    color: white;
    font-family: 'Poppins', 'sans-serif';
 
  }
  p{
    color: white;
    font-family: 'Poppins', 'sans-serif';
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
  },
};
