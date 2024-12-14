import styled from "styled-components";
import { theme } from "../../../styles/Theme";

type SlidePropsType = {
  src: string
}

export const Slide = (props: SlidePropsType) => {
  return (
    <StyledSlide>
          <Image src={props.src} />
          <Text>
            Lorem ipsum dolor sit
          </Text>
    </StyledSlide>
  );
}

const StyledSlide = styled.div`
  max-width: 100%;
  display: flex;
  border-radius: 24px;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin-right: 20px;
  background-color: ${theme.colors.white};
  box-shadow: 0px 6px 64px 0px ${theme.colors.shadow};
`
const Image = styled.img`
  max-width: 400px;
  height: auto;
  border-radius: 24px;
`
const Text = styled.span`
`