import styled from "styled-components"

export const HeaderMenu = (props: { menuItems: Array<string> }) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return <Item key={index}><Link href="">{item}</Link></Item>
        })}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  /* position: fixed;
  top: 0;
  right: calc((1440px - 1000px) / 2); */
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
  `
const Item = styled.li`
    
  `

const Link = styled.a`
  font-family: "Raleway", serif;
  font-size: 18px;
  font-weight: 500;
  line-height: 28px;
  `