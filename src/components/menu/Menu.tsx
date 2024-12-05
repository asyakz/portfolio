import styled from "styled-components"

export const Menu = (props:{menuItems: Array<string>}) => {
  return (
    <StyledMenu>
        <ul>
          {props.menuItems.map((item, index) => {
            return <li key={index}><a href="">{item}</a></li>
          })}
        </ul>
      </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  z-index: 10;
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
  }
`