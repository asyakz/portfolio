import { Button } from "../../../components/Button";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { theme } from "../../../styles/Theme";
import { S } from "./Main_Styles";


export const Main: React.FC = () => {

  const aboutMeText = "I am a junior frontend developer with experience in creating interactive web applications using HTML, CSS, JavaScript and React. I strive to develop in the field of web development and am always open to new knowledge and technologies."

  return (
    <S.Main>
        <S.TextWrapper>
          <S.MainTitle>Frontend Developer</S.MainTitle>
          <S.NameTitle>Hello, my name is Anastasia Kazantseva</S.NameTitle>
          <S.MainText>{aboutMeText}</S.MainText>
          <FlexWrapper>
            <Button as="a" href="#pojects" color={theme.colors.accent} btnType={'primary'}>Projects</Button>
            <Button as="a" href="../../../assets/files/CV.pdf" color={theme.colors.font} btnType={'outlined'} download>Download CV</Button>
          </FlexWrapper>
        </S.TextWrapper>
        <S.Wrapper/>
    </S.Main>
  );
};

