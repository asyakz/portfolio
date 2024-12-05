import styled from "styled-components";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper";
import photoBg from "../../assets/images/footer-bg.svg";

export const Footer = () => {
  return (
    <StyledFooter>
      <FlexWrapper align={"center"} direction={"column"}>
      <SocialList>

        <SocialItem>
          <SocialLink>
            <Icon iconId={"telegramSvg"} width={"21"} height={"21"} viewBox={"0 0 21 21"}></Icon>
          </SocialLink>
        </SocialItem>

        <SocialItem>
          <SocialLink>
            <Icon iconId={"vkSvg"} width={"21"} height={"21"} viewBox={"0 0 21 21"}></Icon>
          </SocialLink>
        </SocialItem>

        <SocialItem>
          <SocialLink>
            <Icon iconId={"instagramSvg"} width={"21"} height={"21"} viewBox={"0 0 21 21"}></Icon>
          </SocialLink>
        </SocialItem>

        <SocialItem>
          <SocialLink>
            <Icon iconId={"linkedinSvg"} width={"21"} height={"21"} viewBox={"0 0 21 21"}></Icon>
          </SocialLink>
        </SocialItem>

      </SocialList>
      <Copyright>Kazantseva Anastasia 2024</Copyright>
      </FlexWrapper>
      <ImgBackground src={photoBg} alt="Me"/>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: relative;
  background-color: #845d5d;
  min-height: 40vh;
`

const SocialList = styled.ul`
  z-index: 1;
  display: flex;
  gap: 30px;
`
const SocialItem = styled.li`
  
`
const SocialLink = styled.a`
  
`

const Copyright = styled.small`
  z-index: 1;
  
`

const ImgBackground = styled.img`
  z-index: 0;
  width: 100vw;
  height: auto;
  object-fit: contain;
  position: absolute;
  bottom: 0;
  right: 0;
`