import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    box-sizing: border-box;
  }
  
  html, body {
    font-size: 110%;
    font-family: "Assistant", serif;
    hyphens: auto;
  }
  
  h1 {
    text-align: center;
    margin: 0 auto 10px auto;
    font-weight: bolder;
    color: gray;
  }

  h2, h3 {
    color: #8db596;
    margin: 5px auto 5px 15px;
  }
  
  table {
    margin: 5px;
  }

  p {
    margin: 10px;
    text-align: justify;
  }
  `;
