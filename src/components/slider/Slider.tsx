import { FlexWrapper } from "../FlexWrapper";
import { Slide } from "./slide/Slide";
import imgForSlide1 from "../../assets/images/img-1.webp";
import imgForSlide2 from "../../assets/images/img-2.webp";
import imgForSlide3 from "../../assets/images/img-3.webp";
import { S } from "./Slider_Styles";

export const Slider = () => {
  return (
    <S.Slider>
      <S.TextSlider>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia tenetur laudantium dolore provident voluptates! Eum nam maxime provident facilis? Doloremque ad quam corrupti saepe possimus et quae. Harum, voluptatibus molestiae.
      </S.TextSlider>
      <FlexWrapper justify={"center"}>
        <Slide src={imgForSlide1}/>
        <Slide src={imgForSlide2}/>
        <Slide src={imgForSlide3}/>
      </FlexWrapper>
      <S.Pagination>
        <span></span>
        <span></span>
        <span></span>
      </S.Pagination>
    </S.Slider>
  );
}

