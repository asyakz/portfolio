import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";
import footerImg from "../../assets/images/footer-bg.svg";

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
      </Container>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  
  ${Container} {
    position: relative;
    padding-bottom: 248px;

    &::before {
      content:'';
      position: absolute;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      background-image: url(${footerImg});
      background-repeat: no-repeat;
      background-size: contain;
      background-position: bottom;
      z-index: 999;
    }

    @media ${theme.media.tablet} {
      padding-bottom: 176px;
    }
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
  font-family: "Nunito", serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 21.82px;
  color: ${theme.colors.gray.light};
  z-index: 1;
`