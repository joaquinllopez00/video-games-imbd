import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    &::-webkit-scrollbar{
      width: 0.5rem;
      height: 2vh;
    }

    &::-webkit-scrollbar-thumb{
      background-color: red;
    }
    body{
      font-family: 'Montserrat', sans-serif;
      width: 100%
    }
    h2{
      font-size: 4rem;
      font-family: 'DM Serif Display', serif;
      background: -webkit-linear-gradient(bottom right,#d13f3f,#ee1d52);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    h3{
      font-size: 2rem;
      color: #333;
      padding: 1.5rem 0rem;
    }
    p{
      font-size: 1.2rem;
      line-height: 200%;
      color: rgb(0,0,0,0.3);
    }
    a{
      text-decoration: none;
      color: #EE1D52;
    }

    img{
      display: block;
    }
    input{
      font-weight: bold;
      font-family: "Montserrat", sans-serif;
    }
  }
`;

export default GlobalStyles;
