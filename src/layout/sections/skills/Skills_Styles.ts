import styled from "styled-components";
import { theme } from "../../../styles/Theme";
import { Container } from "../../../components/Container";

const Skills = styled.section`

  ${Container} {
    padding-bottom: 60px;
  }
`

// Skill

const Skill = styled.div`
  width: 15%;
  padding: 10px;
  margin-bottom: 84px;

  @media ${theme.media.XL} {
    width: 25%;
  }

  @media ${theme.media.M} {
    width: 33.33%;
  }

  @media ${theme.media.tablet} {
    width: 50%;
  }
`

export const S = {
  Skills,
  Skill,
}