import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Icon } from "../../../../components/icon/Icon";
import { S } from "../Skills_Styles";

type SkillPropsType = {
  iconId: string
}

export const Skill:React.FC<SkillPropsType> = (props: SkillPropsType) => {
  return (
    <S.Skill >
      <FlexWrapper align="center" justify="center">
        <Icon iconId={props.iconId} />
      </FlexWrapper>
    </S.Skill>
  );
}
