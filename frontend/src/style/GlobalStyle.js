import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  //:root {
  //  --color-basis: #D8D8D8;
  //}

  *{
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    font-family: sans-serif;
    font-size: 110%;
    background-color: var(--color-basis);
    
  }
  
  h1 {
    text-align: center;
    margin: 0;
    padding: 10px 15px; 
  }
  
  h2, h3, label, table {
    margin: 5%;
  }
  
  p {
    margin: 5%;
  }
  
  
`;
