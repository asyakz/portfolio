import styled from "styled-components"
import { theme } from "../../../styles/Theme";

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return <Item key={index}><Link href="#projects">{item}</Link></Item>
        })}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  z-index: 999;
  min-height: 56px;
  height: 56px;

  ul {
    display: flex;
    align-items: center;
    gap: 30px;
    justify-content: center;
    min-height: 100%;
  }

  @media ${theme.media.mobile} {
    display: none;
  }
  `
const Item = styled.li`
    
  `

const Link = styled.a`
  font-family: "Raleway", serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;

  @media ${theme.media.M} {
    font-size: 16px;
    line-height: 18px;
  }
  `