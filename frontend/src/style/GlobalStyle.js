import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    box-sizing: border-box;
  }
  
  html, body {
    font-size: 110%;
    margin-bottom: 60px;
    font-family: "Assistant";
  }
  
  h1 {
    text-align: center;
    margin: 0;
    padding: 10px; 
    font-weight: bolder;
    color: gray;
  }
  
  h2, h3, label, table {
    margin: 5%;
  }
  
  p {
    margin: 5%;
    text-align: justify;
  }
`;
