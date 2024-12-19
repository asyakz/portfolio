import styled from "styled-components";
import { Logo } from "../../components/logo/Logo";
import { HeaderMenu } from "./headerMenu/HeaderMenu";
import { Container } from "../../components/Container";
import { FlexWrapper } from "../../components/FlexWrapper";
import { theme } from "../../styles/Theme";
import { MobileMenu } from "./mobileMenu/MobileMenu";

export const Header = () => {

  const items = ["Home", "Skills", "Projects", "About me", "Contacts"];

  return (
    <StyledHeader>
        <FlexWrapper align="center" justify="space-between">
          <Logo />
          <HeaderMenu menuItems={items} />
          <MobileMenu menuItems={items} />
        </FlexWrapper>
    </StyledHeader>
  )
};

const StyledHeader = styled.header`
  z-index: 999;
  position: relative;
  min-height: 56px;
  height: 56px;

  @media ${theme.media.M} {
    padding-top: 15px;
  }
`

