import styled from "styled-components";
import { theme } from "../../styles/Theme";

const Header = styled.header`
  z-index: 999;
  position: relative;
  min-height: 56px;
  height: 56px;

  @media ${theme.media.M} {
    padding-top: 15px;
  }
`

export const S = {
  Header,
}