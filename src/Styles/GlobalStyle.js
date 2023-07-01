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

export const theme = {
  dark: {
    text_1: '#FFF',
    text_2: 'rgba(250, 250, 250, 0.3)',
    text_3: '#FFFFFF',
    text_4: 'rgba(250, 250, 250, 0.3)',
    text_5: 'rgba(250, 250, 250, 0.9)',
    text_6: 'rgba(250, 250, 250, 0.3)',
    text_7: 'rgba(250, 250, 250, 0.3)',
    title: '#FFF',
    title_2: '#111',
    main_bg: 'rgba(23, 24, 32, 1)',
    page_bg: '#21222C',
    task_bg: 'rgba(23, 24, 32, 1)',
    task_modal_bg: 'rgba(23, 24, 32, 1)',
    task_modal_border: 'rgba(23, 24, 32, 1)',
    date_btn: 'rgba(33, 34, 44, 1)',
    date_btn_active: 'rgba(62, 133, 243, 1)',
    date_btn_active_text: '#FFFFFF',
    addtask_btn: 'rgba(62, 133, 243, 1)',
    bg_1: 'rgba(19, 21, 26, 1)',
    activeLink_text: '#FFFFFF',
    activeLink_bg: '#3E85F3',
    scroll_bar: 'rgba(45, 48, 55, 1)',
    scroll_bar_track: 'rgba(33, 34, 44, 1)',
    main_border: 'rgba(19, 21, 26, 1)',
    tabl_border: 'rgba(255, 255, 255, 0.15)',
    input_border: 'rgba(255, 255, 255, 0.15)',
    input_border_2: 'rgba(255, 255, 255, 0.15)',
    input_bg: 'rgba(23, 24, 32, 1)',
    close_btn: 'rgba(255, 255, 255, 0.6)',
    feedback_light_btn: '#21222C',
    statistics_bg: 'rgba(33, 34, 44, 1)',
  },
  light: {
    text_1: 'rgba(52, 52, 52, 0.5)',
    text_2: 'rgba(52, 52, 52, 0.5)',
    text_3: 'rgba(52, 52, 52, 1)',
    text_4: 'rgba(52, 52, 52, 0.5)',
    text_5: 'rgba(52, 52, 52, 1)',
    text_6: 'rgba(52, 52, 52, 1)',
    text_7: '#111',
    title: '#111',
    title_2: '#FFF',
    main_bg: 'rgba(247, 246, 249, 1)',
    page_bg: '#FFF',
    task_bg: 'rgba(247, 246, 249, 1)',
    task_modal_bg: '#FFF',
    task_modal_border: 'rgba(220, 227, 229, 0.8)',
    date_btn: 'rgba(227, 243, 255, 1)',
    date_btn_active: 'rgba(202, 232, 255, 1)',
    date_btn_active_text: 'rgba(62, 133, 243, 1)',
    addtask_btn: 'rgba(227, 243, 255, 1)',
    bg_1: '#FFFFFF',
    activeLink_text: 'rgba(62, 133, 243, 1)',
    activeLink_bg: '#e3f3ff',
    scroll_bar: 'rgba(231, 229, 229, 1)',
    scroll_bar_track: 'rgba(242, 242, 242, 1)',
    main_border: 'rgba(220, 227, 229, 0.5)',
    tabl_border: '#dce3e580',
    input_border: 'rgba(246, 246, 246, 1)',
    input_border_2: 'rgba(17, 17, 17, 0.15)',
    input_bg: 'rgba(246, 246, 246, 1)',
    close_btn: 'rgba(62, 133, 243, 1)',
    feedback_light_btn: '#E5EDFA',
    statistics_bg: '#FFFFFF',
  },
};
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
    text: 'rgba(52, 52, 52, 0.5)',
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
  transition: color ${variables.transitions.standart}, background-color ${
  variables.transitions.standart
},
    box-shadow ${variables.transitions.standart}, transform ${
  variables.transitions.standart
};
  background: ${props => props.theme.main_bg};
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
