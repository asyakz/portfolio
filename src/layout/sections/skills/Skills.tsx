import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";

export const Skills = () => {

  return (
    <StyledSkills>
      <Container>
        <SectionTitle>My Skills</SectionTitle>
        <FlexWrapper wrap={"wrap"} justify="space-between">
          <Skill iconId={"vscodeSvg"} />
          <Skill iconId={"JavaScriptSvg"} />
          <Skill iconId={"cssSvg"} />
          <Skill iconId={"htmlSvg"} />
          <Skill iconId={"typescriptSvg"} />
          <Skill iconId={"styledSvg"} />
          <Skill iconId={"figmaSvg"} />
          <Skill iconId={"gitSvg"} />
          <Skill iconId={"reactSvg"} />
          <Skill iconId={"reduxSvg"} />
          <Skill iconId={"sassSvg"} />
          <Skill iconId={"photoshopSvg"} />
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
}

const StyledSkills = styled.section`
  padding-left: 120px;
  padding-right: 120px;
  min-height:100vh;
`
