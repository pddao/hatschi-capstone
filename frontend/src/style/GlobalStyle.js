import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    box-sizing: border-box;
  }
  
  html, body {
    font-size: 110%;
    background-color: #fff;
    margin-bottom: 60px;
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
