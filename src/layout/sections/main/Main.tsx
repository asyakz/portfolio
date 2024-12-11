import styled from "styled-components";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { Container } from "../../../components/Container";
import { theme } from "../../../styles/Theme";

export const Main = () => {

  const aboutMeText = "I am a junior frontend developer with experience in creating interactive web applications using HTML, CSS, JavaScript and React. I strive to develop in the field of web development and am always open to new knowledge and technologies."

  return (
    <StyledMain>
      <MainContainer>
        <FlexWrapper direction={"column"} justify={"center"} align={"start"}>
          <MainTitle>Frontend Developer</MainTitle>
          <NameTitle>Hello, my name is Anastasia Kazantseva</NameTitle>
          <MainText>{aboutMeText}</MainText>
          <FlexWrapper>
            <Button color={theme.colors.accent} btnType={'primary'}>Projects</Button>
            <Button color={theme.colors.primaryFont} btnType={'outlined'}>Download CV</Button>
          </FlexWrapper>
        </FlexWrapper>
      </MainContainer>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  padding-left: 120px;
  padding-right: 120px;
`

const MainContainer = styled(Container)`
  padding-top: 55px;
  padding-bottom: 100px;
`

const MainTitle = styled.h1`
  margin-bottom: 12px;
  font-family: "Nunito", serif;
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  max-width: 50%;
  color: ${theme.colors.accent};
`

const NameTitle = styled.span`
  margin-bottom: 32px;
  font-family: "Roboto";
  font-size: 64px;
  font-weight: 700;
  line-height: 76.8px;
  max-width: 50%;
  color: ${theme.colors.gray.dark};
`

const MainText = styled.span`
  margin-bottom: 32px;
  max-width: 50%;
  font-family: "Nunito", serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 36px;
  color: ${theme.colors.gray.light};
`