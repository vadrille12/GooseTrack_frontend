import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

import PoppinsMedium from '../fonts/poppins/Poppins-Medium.ttf';
import PoppinsRegular from '../fonts/poppins/Poppins-Regular.ttf';
import InterBold from '../fonts/inter/Inter-Bold.ttf';
import InterMedium from '../fonts/inter/Inter-Medium.ttf';
import InterRegular from '../fonts/inter/Inter-Regular.ttf';
import InterSemiBold from '../fonts/inter/Inter-SemiBold.ttf';
import InterSemiBoldItalic from '../fonts/inter/Inter-SemiBold-Italic.ttf';
import CoolveticaRegular from '../fonts/coolvetica/Coolvetica-Regular.otf';
import CoolveticaRegularItalic from '../fonts/coolvetica/Coolvetica-Regular-Italic.otf';

export const variables = {
  colors: {
    primary: '#3E85F3',
    secondary: '#2B78EF',
    lightBlue: '#E3F3FF',
    darkBlue: '#CAE8FF',
    bgBlue: '#DCEBF7',
    background: '#FFFFFF',
    white: '#FFFFFF',
    blackTitle: '#171820',
    black: '#111111',
    text: '#343434',
    mainYellow: '#F3B249',
    lightYellow: '#FCF0D4',
    redError: '#DA1414',
    redErrorLight: '#E74A3B',
    mainRed: '#EA3D65',
    lightRed: '#FFD2DD',
    greenValid: '#3CBC81',
    muted: '#F7F6F9',
    closeButton: '#111111',
    lightBlueBackground: '#CEEEFD',
  },

  transitions: {
    standart: '300ms cubic-bezier(0.4, 0, 0.2, 1)',
  },

  shadow: { shadow: 'rgba(0, 0, 0, 0.15) 0px 15px 25px' },

  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1440px',
  },
};

export const GlobalStyle = createGlobalStyle`

    @font-face {
        font-family: 'PoppinsRegular';
        src: local('PoppinsRegular'),
        url(${PoppinsRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'PoppinsMedium';
        src: local('PoppinsMedium'),
        url(${PoppinsMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterBold';
        src: local('InterBold'),
        url(${InterBold}) format('truetype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterMedium';
        src: local('InterMedium'),
        url(${InterMedium}) format('truetype');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterRegular';
        src: local('InterRegular'),
        url(${InterRegular}) format('truetype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterSemiBold';
        src: local('InterSemiBold'),
        url(${InterSemiBold}) format('truetype');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'InterSemiBoldItalic';
        src: local('InterSemiBoldItalic'),
        url(${InterSemiBoldItalic}) format('truetype');
        font-weight: 600;
        font-style: italic;
    }

    @font-face {
        font-family: 'CoolveticaRegular';
        src: local('CoolveticaRegular'),
        url(${CoolveticaRegular}) format('opentype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'CoolveticaRegularItalic';
        src: local('CoolveticaRegularItalic'),
        url(${CoolveticaRegularItalic}) format('opentype');
        font-weight: 400;
        font-style: italic;
    }

body{
  margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
  'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  list-style: none;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

#root {
  transition: color ${variables.transitions.standart}, background-color ${variables.transitions.standart},
    box-shadow ${variables.transitions.standart}, transform ${variables.transitions.standart};
  background: #f7f6f9;
}

p {
    padding: 0;
    margin: 0;
}

h1, h2, h3 {
  margin: 0px;
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

a {
  text-decoration: none;
  color: currentColor;
}

ul,
p,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}
`;
