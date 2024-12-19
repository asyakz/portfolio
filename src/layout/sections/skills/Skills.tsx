import styled from "styled-components";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { SectionTitle } from "../../../components/SectionTitle";
import { Skill } from "./skill/Skill";
import { Container } from "../../../components/Container";

export const Skills = () => {

  const skillsNames = ["vscodeSvg", "JavaScriptSvg", "cssSvg", "htmlSvg", "typescriptSvg", "styledSvg", "figmaSvg", "gitSvg", "reactSvg", "reduxSvg", "sassSvg", "photoshopSvg"];

  return (
    <StyledSkills>
      <Container>
        <SectionTitle>Skills</SectionTitle>
        <FlexWrapper wrap={"wrap"} justify="space-between">
          {skillsNames.map((item, index) => {
            return <Skill key={index} iconId={item} />
          })}
        </FlexWrapper>
      </Container>
    </StyledSkills>
  );
}

const StyledSkills = styled.section`

  ${Container} {
    padding-bottom: 60px;
  }
`
