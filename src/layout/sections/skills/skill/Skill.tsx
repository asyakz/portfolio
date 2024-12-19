import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/icon/Icon";
import styled from "styled-components";
import { theme } from "../../../../styles/Theme";

type SkillPropsType = {
  iconId: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <StyledSkill >
      <FlexWrapper align="center" justify="center">
        <Icon iconId={props.iconId} />
      </FlexWrapper>
    </StyledSkill>
  );
}

const StyledSkill = styled.div`
  width: 15%;
  padding: 10px;
  margin-bottom: 84px;

  @media ${theme.media.XL} {
    width: 25%;
  }

  @media ${theme.media.M} {
    width: 33.33%;
  }

  @media ${theme.media.tablet} {
    width: 50%;
  }
`