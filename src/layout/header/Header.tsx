import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { HeaderMenu } from "./headerMenu/HeaderMenu"
import photo from '../../assets/images/me1.webp'
import { Container } from "../../components/Container"
import { FlexWrapper } from "../../components/FlexWrapper"
import { theme } from "../../styles/Theme"

export const Header = () => {

  const items = ["Home", "Skills", "Projects", "About me", "Contacts"];

  return (
    <StyledHeader>
      <Container>
        <FlexWrapper align="center" justify="space-between">
          <Logo />
          <HeaderMenu menuItems={items} />
          <Photo src={photo} alt="Me" />
        </FlexWrapper>
      </Container>
    </StyledHeader>
  )
};

const StyledHeader = styled.header`
  min-height: 56px;
  height: 56px;

  ${Container} {
    position: relative;
    padding-bottom: 0px;
  }
`

const Photo = styled.img`
  z-index: 0;
  width: 720px;
  height: auto;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
`
