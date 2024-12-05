import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
  iconId: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill>
      <Icon iconId={props.iconId}/>
    </StyledSkill>
  );
}

const StyledSkill = styled.div`
  width: 15%;
  background-color: #e5cccc71;
  margin: 10px;
`