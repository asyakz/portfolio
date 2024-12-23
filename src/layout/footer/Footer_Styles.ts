import styled from "styled-components";
import footerImg from "../../assets/images/footer-bg.svg";
import { Container } from "../../components/Container";
import { theme } from "../../styles/Theme";

const Footer = styled.footer`
  
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
      z-index: 700;
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

export const S = {
  Footer,
  SocialList,
  SocialItem,
  SocialLink,
  Copyright
}