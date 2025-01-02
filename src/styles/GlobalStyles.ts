import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #f0f4f8;
    color: #333;
    padding: 20px;
  }

  h1, h2, h3 {
    font-weight: 600;
  }

  input, button {
    font-family: inherit;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 10px;
    font-size: 16px;
    margin-bottom: 10px;
  }

  button {
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  button:hover {
    background-color: #45a049;
  }

  input {
    width: 100%;
    max-width: 400px;
  }
`

export default GlobalStyles
