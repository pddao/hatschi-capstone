import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    box-sizing: border-box;
  }
  
  html, body {
    font-size: 110%;
    margin-bottom: 60px;
    font-family: "Assistant", serif;
    hyphens: auto;
  }
  
  h1 {
    text-align: center;
    margin: 0;
    padding: 10px; 
    font-weight: bolder;
    color: gray;
  }
  
  h2, label, table {
    margin: 5%;
  }
  
  h3 {
    margin: 0;
    padding: 5px 15px;
    color: #8db596;
  }
  
  p {
    margin: 5px 15px;
    text-align: justify;
  }
  `;
