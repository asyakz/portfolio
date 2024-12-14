import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import pro1Img from '../../../assets/images/project-1.webp';
import pro2Img from '../../../assets/images/project-2.webp';
import pro3Img from '../../../assets/images/project-3.webp';
import { Container } from "../../../components/Container";

export const Projects = () => {

const proText1 ="This art gallery project Blanchard was created as part of the online school Skillbox";
const proText2 ="The Memory Game was created by me on the basis of vanilla JavaScript";
const proText3 ="This project of the HighPass photo studio was created as part of the training of the online school Skillbox";

  return (
    <StyledProjects id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper direction="column" align="center">
          <Project title={"Blanchard"} text={proText1} src={pro1Img} link={"http://t90900f7.beget.tech/"} btnType={"outlined"}/>
          <Project title={"Memory Game"} text={proText2} src={pro2Img} link={"http://h9001901.beget.tech/"} orderLeft={2} orderRight={1} btnType={"outlined"} borderRadiusRound={'0px'} borderRadiusZero={'24px'}/>
          <Project title={"High Pass"} text={proText3} src={pro3Img} link={"https://github.com/asyakz/HighPass"} btnType={"outlined"}/>
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
}

const StyledProjects = styled.section`
  
`