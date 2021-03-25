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
      font-size: 3rem;
      font-family: 'Merriweather', serif;
      font-weight: lighter;
      color: #EE1D52
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

    button{
    
    }
  }
`;

export default GlobalStyles;
