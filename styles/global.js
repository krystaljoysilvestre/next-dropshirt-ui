import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


  body {
    margin: 0;
    font-family: "Poppins";
    font-weight: 300;
    font-size: 14px;
  }

  .ant-btn {
    &-text {
      background-image: none !important;

      &:hover, &:focus, &:active {
        background-image: none !important;
        box-shadow: none !important;
        background: none;
      }
    }
  }
`;

export default GlobalStyle;
