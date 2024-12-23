
import { SectionTitle } from "../../../components/SectionTitle";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper";
import { TabMenu } from "./tabMenu/TabMenu";
import { Container } from "../../../components/Container";
import { S } from "./AboutMe_Styles";


export const AboutMe:React.FC = () => {

  const tabsItems = ["Macrame Jewelry Designer", "Photographer"]
  return (
    <S.AboutMe>
      <Container>
        <FlexWrapper direction={"column"} align={"center"}>
          <SectionTitle>More about me</SectionTitle>
          <S.TextAboutMe>A little more about my other activities...</S.TextAboutMe>
          <TabMenu menuItems={tabsItems} />
          <Slider />
        </FlexWrapper>
      </Container>
    </S.AboutMe>);
}

