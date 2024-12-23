import { S } from "../Slider_Styles";

type SlidePropsType = {
  src: string
}

export const Slide = (props: SlidePropsType) => {
  return (
    <S.Slide>
          <S.Image src={props.src} />
          <S.Text>
            Lorem ipsum dolor sit
          </S.Text>
    </S.Slide>
  );
}

