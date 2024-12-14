import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";

type SkillPropsType = {
  iconId: string,
  MarginBottom?: string
}

type Margin = {
  MarginBottom?: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill MarginBottom={props.MarginBottom}>
      <FlexWrapper align="center" justify="center">
        <Icon iconId={props.iconId} />
      </FlexWrapper>
    </StyledSkill>
  );
}

const StyledSkill = styled.div<Margin>`
  width: 15%;
  padding: 10px;
  margin-bottom: ${props => props.MarginBottom || '84px'};
`