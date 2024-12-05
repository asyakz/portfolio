import styled from "styled-components";
import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";

export const Main = () => {
  return (
    <StyledMain>
      <FlexWrapper direction={"column"} justify={"center"} align={"start"}>
        <MainTitle>Frontend Developer</MainTitle>
        <NameTitle>Hello, my name is Anastasia Kazantseva</NameTitle>
        <MainText>I am Junior Frontend Developer</MainText>
        <FlexWrapper>
          <Button>Projects</Button>
          <Button>Download CV</Button>
        </FlexWrapper>
      </FlexWrapper>
    </StyledMain>
  );
};

const StyledMain = styled.div`
  padding-left: 120px;
  padding-right: 120px;
  min-height: 100vh;
  background-color: pink;
`

const MainTitle = styled.h1`
  font-weight: bold;
  font-size: 1rem;
  max-width: 50%;
`

const NameTitle = styled.span`
  font-weight: bold;
  font-size: 3rem;
  max-width: 50%;
`

const MainText = styled.span`
  font-weight: bold;
  font-size: 1rem;
  max-width: 50%;
`