import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TabMenu } from "./tabMenu/TabMenu";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const AboutMe = () => {

  const tabItems = ["Macrame Jewelry Designer", "Photographer"]
  return (
    <StyledAboutMe>
      <Container>
        <FlexWrapper direction={"column"} align={"center"}>
          <SectionTitle>More about me</SectionTitle>
          <TextAboutMe>A little more about my other activities...</TextAboutMe>
          <TabMenu menuItems={tabItems} />
          <Slider />
        </FlexWrapper>
      </Container>
    </StyledAboutMe>);
}

const StyledAboutMe = styled.section`
  
`

const TextAboutMe = styled.p`
  font-family: "Nunito", serif;
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: ${theme.colors.gray.light};
`
