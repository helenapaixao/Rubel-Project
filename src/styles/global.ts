import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing:border-box;
    background-color:rgb(38, 38, 38);
  }
  body {
    font: 400 14px 'Roboto', sans-serif;
    color: #F2F2F2;;
    background: #F2F2F2;
    -webkit-font-smoothing: antialiased;
  }
  h1 {
    color: #F2F2F2;
    font-size: 20px;
  }
  body, input, button {
    font: 16px Roboto, sans-serif;
  }
  button {
    cursor: pointer;
  }
  .page{
    position:absolute;
    top:0;
    left:0;
    right:0;
  }
  .fade-appear,
  .fade-enter {
      opacity: 0;
      z-index: 1;
  }
  .fade-appear-active,
  .fade-enter.fade-enter-active {
      opacity: 1;
      transition: opacity 300ms linear 150ms;
  }
  .fade-exit {
      opacity: 1;
  }
  .fade-exit.fade-exit-active {
      opacity: 0;
      transition: opacity 150ms linear;
  }
`;