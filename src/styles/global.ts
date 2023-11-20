'use client'

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  src: url('/fonts/poppins-v20-latin-300.woff2') format('woff2'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  src: url('/fonts/poppins-v20-latin-regular.woff2') format('woff2'); 
}

@font-face {
  font-display: swap; 
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  src: url('/fonts/poppins-v20-latin-600.woff2') format('woff2'); 
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  font-size: 62.5%; // 1rem = 10px == 10/16px = 62.5% (1.4rem = 14px)
}

html, body, #__next {
  height: 100%;
}

body {
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
`
