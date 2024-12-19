import styled, { css } from "styled-components"
import { theme } from "../../../styles/Theme";

export const MobileMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledMobileMenu>
      <BurgerButton isOpen={false}>
        <span></span>
      </BurgerButton>

      <MobileMenuPopup isOpen={false}>
        <ul>
          {props.menuItems.map((item, index) => {
            return <Item key={index}><Link href="#projects">{item}</Link></Item>
          })}
        </ul>
      </MobileMenuPopup>
    </StyledMobileMenu>
  );
};

const StyledMobileMenu = styled.nav`
  z-index: 999;
  display: none;

  @media ${theme.media.mobile} {
    display: block;
  }
`
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 800;
  background-color: ${theme.colors.mobileBgcolor};
  display: none;

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    display: flex;
    justify-content: center;
    align-items: center;
  `}

  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  }
  
`

const Item = styled.li`
    
  `

const Link = styled.a`
  font-family: "Raleway", serif;
  font-size: 24px;
  line-height: 18px;
  color: ${theme.colors.white};
  font-weight: 500;
  `

const BurgerButton = styled.button<{ isOpen: boolean }>`
  z-index: 1;
  position: fixed;
  top: 15px;
  right: 15px;
  width: 24px;
  height: 24px;

  span {
    z-index: 2;
    display: block;
    width: 24px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    top: 10px;
    right: 0px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}

    &::before {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
        background-color: ${theme.colors.accent};
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        background-color: ${theme.colors.accent};
      `}
    }

  }
`