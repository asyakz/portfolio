import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import pro1Img from '../../../assets/images/project-1.webp'
import pro2Img from '../../../assets/images/project-2.webp'

export const Projects = () => {
  return (
    <StyledProjects>
      <SectionTitle>My Projects</SectionTitle>
      <FlexWrapper direction="column" align="center">
        <Project title={"Blanchard"} text={"Lorem ipsum"} src={pro1Img} link={"http://t90900f7.beget.tech/"}/>
        <Project title={"Memory Game"} text={"Lorem ipsum"} src={pro2Img} link={"http://h9001901.beget.tech/"} orderLeft={2} orderRight={1}/>
        <Project title={"Blanchard"} text={"Lorem ipsum"} src={pro1Img} link={"http://t90900f7.beget.tech/"}/>
      </FlexWrapper>
    </StyledProjects>
  );
}

const StyledProjects = styled.section`
  padding-left: 120px;
  padding-right: 120px;
  min-height: 100vh;
  background-color: #ecc592;
`