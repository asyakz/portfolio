import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Button } from "../../../../components/Button";
import { theme } from "../../../../styles/Theme";

type ProjectPropsType = {
  title: string,
  text: string,
  src: string,
  link?: string
  orderLeft?: 1 | 2,
  orderRight?: 1 | 2,
  btnType: string,
  borderRadiusRound?: string,
  borderRadiusZero?: string,
}

type PropsType = {
  orderLeft?: 1 | 2,
  orderRight?: 1 | 2,
  borderRadiusRound?: string,
  borderRadiusZero?: string,
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <FlexWrapper>
        <LeftContainer orderLeft={props.orderLeft}>
          <Title>{props.title}</Title>
          <Text>{props.text}</Text>
          <Button as={Link} href={`${props.link || '#'}`} target="_blank" btnType={"outlined"}>View project</Button>
        </LeftContainer>
        <RightContainer orderRight={props.orderRight} borderRadiusRound={props.borderRadiusRound} borderRadiusZero={props.borderRadiusZero}>
          <Image src={props.src} alt="" />
        </RightContainer>
      </FlexWrapper>
    </StyledProject>
  );
}

const StyledProject = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 24px;
  max-width: 992px;
  width: 100%;
  margin-bottom: 80px;
  box-shadow: 0px 6px 64px 0px ${theme.colors.shadow};
  background-color: ${theme.colors.gray.ultraLight};
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Title = styled.h3`
  font-family: "Playfair Display", serif;
  margin-bottom: 24px;
  font-size: 40px;
  font-weight: 700;
  line-height: 60px;
  color: ${theme.colors.font};
`

const Text = styled.p`
  font-family: "Nunito", serif;
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 400;
  line-height: 27px;
  color: ${theme.colors.gray.light};
`

const Link = styled.a`
  border-radius: 24px;
`

const LeftContainer = styled.div<PropsType>`
  order: ${props => props.orderLeft || 1};
  padding: 50px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`

const RightContainer = styled.div<PropsType>`
  order: ${props => props.orderRight || 2};
  border-top-right-radius: ${props => props.borderRadiusRound || '24px'};
  border-bottom-right-radius: ${props => props.borderRadiusRound || '24px'};
  border-bottom-left-radius: ${props => props.borderRadiusZero || '0px'};
  border-top-left-radius: ${props => props.borderRadiusZero || '0px'};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  min-height: 524px;
  overflow: hidden;
`