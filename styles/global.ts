import { styled, createGlobalStyle } from 'styled-components';

import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['cyrillic', 'cyrillic-ext', 'latin'],
});

export const theme = {
  colors: {
    primary: '#6B0DE3',
    secondary: '#827A8B',
    outlined: '#7F52FF',
    black: '#000000',
    white: '#ffffff',
  },

  fonts: {
    primary: 'var(--montserrat-font), sans-serif',
  },

  responsive: {
    mobile: '@media (min-width: 320px)',
    tablet: '@media (min-width: 768px)',
    laptop: '@media (min-width: 1024px)',
    desktop: '@media (min-width: 1201px)',
    extra: '@media (min-width: 1601px)',
  },
};

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const GlobalStyle = createGlobalStyle`
  :root {
    --montserrat-font: ${montserrat.style.fontFamily};
  }

  *,
  :before,
  :after {
    box-sizing: border-box;
    -webkit-user-drag: none;
    outline: none;
  }
  
  body {
    -webkit-tap-highlight-color: transparent;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    touch-action: pan-x pan-y;
    overscroll-behavior: none;
    max-width: 100vw;
    margin: 0;
    font-size: 14px;
    line-height: 1.4;
    background-color:black;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    background-color: inherit;
    border: 0;
    color: inherit;
    padding: 0;
  }

  ul,
  ol {
    margin: 0;
    padding: 0;
    list-style-type: none;
  };
`;
