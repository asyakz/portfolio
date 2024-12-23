import styled from "styled-components"
import { theme } from "../../../../styles/Theme";
import { Menu } from "../../../header/headerMenu/menu/Menu";

export const TabMenu:React.FC<{menuItems: Array<string>}> = (props:{menuItems: Array<string>}) => {
  return (
    <StyledTabMenu>
        <Menu menuItems={props.menuItems} />
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  z-index: 10;
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    margin-bottom: 20px;

    li {
      background-color: ${theme.colors.accent};
      padding: 10px 30px 10px 30px;
      font-weight: bold;
      border-radius: 8px;
    }
  }
`