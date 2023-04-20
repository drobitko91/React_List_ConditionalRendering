import styled, { createGlobalStyle } from "styled-components";

import SourceSansProRegularWoff2 from "./../fonts/SourceSansPro-Regular.woff2";
import SourceSansProRegularWoff from "./../fonts/SourceSansPro-Regular.woff";

import SourceSansProBoldWoff2 from "./../fonts/SourceSansPro-Bold.woff2";
import SourceSansProBoldWoff from "./../fonts/SourceSansPro-Bold.woff";

import { color } from "./variables";

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'SourceSansProRegular';
    src: local('SourceSansProRegular'), local('SourceSansProRegular'),
    url(${SourceSansProRegularWoff2}) format('woff2'),
    url(${SourceSansProRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'SourceSansProBold';
    src: local('SourceSansProBold'), local('SourceSansProBold'),
    url(${SourceSansProBoldWoff2}) format('woff2'),
    url(${SourceSansProBoldWoff}) format('woff');
    font-weight: bold;
    font-style: normal;
  }

  * {
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: inherit;
    }
  }

  html {
    font: 18px/1.3 'SourceSansProRegular', Arial Sans-Serif;
  }

  body {
    margin: 0;
    color: ${color.primaryColor};
    background: #111;
    &.blocked {
      overflow: hidden;
    }
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
  }

  a {
    color: #fff;
    text-decoration: none;

    &:focus {
      outline: none;
    }
  }

  input {
    width: 100%;
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  p {
    margin: 0;
  }

  button {
    outline: none;
    cursor: pointer;
    background: none;
    border: none;
    color: red;
    font-size: 30px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

const Application = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1280px;
  padding: 15px;
  margin: 0 auto;
  min-height: 100vh;
  @media (min-width: 1280px) {
    padding: 30px;
  }
`;

export { GlobalStyle, Application };
