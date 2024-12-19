import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Project } from "./project/Project";
import pro1Img from '../../../assets/images/project-1.webp';
import pro2Img from '../../../assets/images/project-2.webp';
import pro3Img from '../../../assets/images/project-3.webp';
import { Container } from "../../../components/Container";

export const Projects = () => {
  
const data = [
  {
    id: 1, title: "Blanchard", text: "This art gallery project Blanchard was created as part of the online school Skillbox", link: "http://t90900f7.beget.tech/", img: pro1Img
  },
  {
    id: 2, title: "Memory Game", text: "The Memory Game was created by me on the basis of vanilla JavaScript", link: "http://h9001901.beget.tech/", img: pro2Img
  }, 
  {
    id: 3, title: "High Pass", text: "This project of the HighPass photo studio was created as part of the training of the online school Skillbox", link: "https://github.com/asyakz/HighPass", img: pro3Img
  }
]

  return (
    <StyledProjects id="projects">
      <Container>
        <SectionTitle>Projects</SectionTitle>
        <FlexWrapper direction="column" align="center">
          {data.map((item, index) => {
            return <Project key={item.id} title={item.title} text={item.text} src={item.img} link={item.link} btnType={"outlined"} direction={`${index % 2 === 0 ? "row" : "row-reverse"}`}/>
          })}
        </FlexWrapper>
      </Container>
    </StyledProjects>
  );
}

const StyledProjects = styled.section`
  
`