import styled from "styled-components"
import { Logo } from "../../components/logo/Logo"
import { Menu } from "../../components/menu/Menu"
import photo from '../../assets/images/me1.webp'

export const Header = () => {

  const items = ["Home", "Skills", "Projects", "About me", "Contacts"];

  return (
    <StyledHeader>
      <Logo/>
      <Menu menuItems={items} />
      <Photo src={photo} alt="Me"/>
    </StyledHeader>
  )
};

const StyledHeader = styled.header`
  padding-left: 120px;
  padding-right: 120px;
  position: relative;
  background-color: #d04be8;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Photo = styled.img`
  z-index: 0;
  width: 650px;
  height: auto;
  object-fit: cover;
  position: absolute;
  top: 0;
  right: 0;
`