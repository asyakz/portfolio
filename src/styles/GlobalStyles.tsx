import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${theme.colors.gray.dark};
  color: ${theme.colors.primaryFont};
  margin: 0;
  font-family: "Nunito", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
  color: ${theme.colors.primaryFont};
}

button {
  background-color: unset;
  border: none;
}

`
