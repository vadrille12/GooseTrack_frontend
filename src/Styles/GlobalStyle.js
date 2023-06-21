import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body{
margin: 0;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

#root {
  background: #f7f6f9;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}

img {
    display: block;
}

p {
    padding: 0;
    margin: 0;
}

h1, h2, h3 {
  margin: 0px;
}
`;
