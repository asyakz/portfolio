import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import photoBg from "../../assets/images/footer-bg.svg";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <FlexWrapper align={"center"} direction={"column"}>
          <SocialList>

            <SocialItem>
              <SocialLink>
                <Icon iconId={"instagramSvg"} width={"38"} height={"38"} viewBox={"0 0 38 38"}></Icon>
              </SocialLink>
            </SocialItem>

            <SocialItem>
              <SocialLink>
                <Icon iconId={"linkedinSvg"} width={"38"} height={"38"} viewBox={"0 0 38 38"}></Icon>
              </SocialLink>
            </SocialItem>

            <SocialItem>
              <SocialLink>
                <Icon iconId={"telegramSvg"} width={"44"} height={"44"} viewBox={"0 2 55 55"}></Icon>
              </SocialLink>
            </SocialItem>

            <SocialItem>
              <SocialLink>
                <Icon iconId={"vkSvg"} width={"70"} height={"70"} viewBox={"0 20 81 81"}></Icon>
              </SocialLink>
            </SocialItem>

          </SocialList>
          <Copyright>Kazantseva Anastasia 2024</Copyright>
        </FlexWrapper>
        <ImgBackground src={photoBg} alt="Me" />
      </Container>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  
  ${Container} {
    position: relative;
  }
`

const SocialList = styled.ul`
  z-index: 1;
  display: flex;
  gap: 30px;
`
const SocialItem = styled.li`
  
`
const SocialLink = styled.a`
  color: ${theme.colors.font};

  &:hover {
    color:${theme.colors.accent};
  }
`

const Copyright = styled.small`
  z-index: 1;
  
`

const ImgBackground = styled.img`
  z-index: 0;
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  right: 0;
`