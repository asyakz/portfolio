import styled from "styled-components";
import { FlexWrapper } from "../FlexWrapper";
import { Slide } from "./slide/Slide";
import imgForSlide1 from "../../assets/images/img-1.webp";
import imgForSlide2 from "../../assets/images/img-2.webp";
import imgForSlide3 from "../../assets/images/img-3.webp";
import { theme } from "../../styles/Theme";

export const Slider = () => {
  return (
    <StyledSlider>
      <TextSlider>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia tenetur laudantium dolore provident voluptates! Eum nam maxime provident facilis? Doloremque ad quam corrupti saepe possimus et quae. Harum, voluptatibus molestiae.
      </TextSlider>
      <FlexWrapper justify={"center"}>
        <Slide src={imgForSlide1}/>
        <Slide src={imgForSlide2}/>
        <Slide src={imgForSlide3}/>
      </FlexWrapper>
      <Pagination>
        <span></span>
        <span></span>
        <span></span>
      </Pagination>
    </StyledSlider>
  );
}

const StyledSlider = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin: 5px;
    border-radius: 50%;
    background-color: ${theme.colors.accent};
  }
`

const TextSlider = styled.p`
  margin-bottom: 20px;
`