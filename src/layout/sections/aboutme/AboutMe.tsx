import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Menu } from "../../../components/menu/Menu";

export const AboutMe = () => {

  const items = ["Macrame Jewelry Designer", "Photographer"]
  return (
    <StyledAboutMe>
      <FlexWrapper direction={"column"} align={"center"}>
        <SectionTitle>More about me</SectionTitle>
        <TextAboutMe>A little more about my other activities...</TextAboutMe>
        <Menu menuItems={items}/>
        <Slider/>
      </FlexWrapper>
    </StyledAboutMe>);
}

const StyledAboutMe = styled.section`
  padding-left: 120px;
  padding-right: 120px;
  min-height: 100vh;
  background-color: #b3f6e0;
`

const TextAboutMe = styled.p`
  
`
