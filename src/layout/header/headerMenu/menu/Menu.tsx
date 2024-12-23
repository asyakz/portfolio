import { S } from "../HeaderMenu_Styles";

export const Menu: React.FC<{ menuItems: Array<string> }> = (props: { menuItems: Array<string> }) => {
  return (
    <ul>
      {props.menuItems.map((item, index) => {
        return <S.MenuItem key={index}><S.MenuLink href="#projects">{item}</S.MenuLink></S.MenuItem>
      })}
    </ul>
  );
}

