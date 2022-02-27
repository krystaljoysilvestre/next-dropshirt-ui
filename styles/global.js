import { createGlobalStyle } from 'styled-components';

import PoppinsThin from 'public/fonts/Poppins-Thin.ttf';
import PoppinsExtraLight from 'public/fonts/Poppins-ExtraLight.ttf';
import PoppinsLight from 'public/fonts/Poppins-Light.ttf';
import PoppinsRegular from 'public/fonts/Poppins-Regular.ttf';
import PoppinsMedium from 'public/fonts/Poppins-Medium.ttf';
import PoppinsMediumItalic from 'public/fonts/Poppins-MediumItalic.ttf';
import PoppinsSemibold from 'public/fonts/Poppins-SemiBold.ttf';
import PoppinsBold from 'public/fonts/Poppins-Bold.ttf';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Poppins";
    font-weight: 100;
    src: url(${PoppinsThin});
  }

  @font-face {
    font-family: "Poppins";
    font-weight: 200;
    src: url(${PoppinsExtraLight});
  }

  @font-face {
    font-family: "Poppins";
    font-weight: 300;
    src: url(${PoppinsLight});
  }

  @font-face {
    font-family: "Poppins";
    font-weight: "normal";
    src: url(${PoppinsRegular});
  }

  @font-face {
    font-family: "Poppins";
    font-weight: 500;
    src: url(${PoppinsMedium});
  }

  @font-face {
    font-family: "Poppins";
    font-style: italic;
    src: url(${PoppinsMediumItalic});
  }

  @font-face {
    font-family: "Poppins";
    font-weight: 600;
    src: url(${PoppinsSemibold});
  }

  @font-face {
    font-family: "Poppins";
    font-weight: 700;
    src: url(${PoppinsBold});
  }

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
