import styled from "styled-components"
import { font } from "../../../styles/Common";
import { theme } from "../../../styles/Theme";

const Main = styled.section`
  
  display: flex;
  flex-direction: row;
  padding-top: 55px;
  padding-bottom: 0;
  
  @media ${theme.media.L} {
    flex-wrap: wrap;
    flex-direction: column-reverse;
  }
`

const MainTitle = styled.h1`
  ${font({family: "'Nunito', serif", weight: 700, color: `${theme.colors.accent}`, Fmin: 20, Fmax: 20})};
  margin-bottom: 12px;
  text-transform: uppercase;
`

const NameTitle = styled.span`
  ${font({family: "Roboto", weight: 700, color: `${theme.colors.gray.dark}}`, Fmin: 42, Fmax: 64})};
  z-index: 3;
  line-height: 76.8px;
  margin-bottom: 32px;

  @media ${theme.media.M} {
    line-height: 50.4px;
  }
`

const MainText = styled.span`
  ${font({family: "'Nunito', serif", weight: 400, color: `${theme.colors.gray.light}}`, Fmin: 24, Fmax: 24})};
  z-index: 3;
  margin-bottom: 32px;
  line-height: 36px;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  flex-basis: 50%;
  
  padding-bottom: 214px;

  @media ${theme.media.L} {
    flex-basis: 100%;
  }
`

const Wrapper = styled.div`
  position: relative;
  flex-basis: 50%;
  
  height: auto;
  padding-bottom: 214px;

  @media ${theme.media.L} {
    flex-basis: 100%;
    min-height: 400px;
  }
`

export const S = {
  Main,
  MainTitle,
  NameTitle,
  MainText,
  TextWrapper,
  Wrapper
}
