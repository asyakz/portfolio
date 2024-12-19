import styled from "styled-components"
import { theme } from "../../../../styles/Theme";

export const TabMenu = (props:{menuItems: Array<string>}) => {
  return (
    <StyledTabMenu>
        <ul>
          {props.menuItems.map((item, index) => {
            return <li key={index}><a href="">{item}</a></li>
          })}
        </ul>
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