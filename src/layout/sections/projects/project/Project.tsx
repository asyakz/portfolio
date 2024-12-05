import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Button } from "../../../../components/Button";

type ProjectPropsType = {
  title: string,
  text: string,
  src: string,
  link?: string
  orderLeft?: 1 | 2,
  orderRight?: 1 | 2
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <FlexWrapper>
        <LeftContainer orderLeft={props.orderLeft}>
          <Title>{props.title}</Title>
          <Text>{props.text}</Text>
          <Link as={Button} href={`${props.link || '#'}`} target="_blank">View project</Link>
        </LeftContainer>
        <RightContainer orderRight={props.orderRight}>
        <Image src={props.src} alt="" />
        </RightContainer>
      </FlexWrapper>
    </StyledProject>
  );
}

const StyledProject = styled.div`
  background-color: #FDC435;
;
  max-width: 992px;
  width: 100%;
  margin-bottom: 20px;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`
const Title = styled.h3`
  font-size: 2rem;
  
`
const Text = styled.p`
  
`
const Link = styled.a`
  
`

const LeftContainer = styled.div<Pick<ProjectPropsType, 'orderLeft'>>`
  order: ${props => props.orderLeft || 1};
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const RightContainer = styled.div<Pick<ProjectPropsType, 'orderRight'>>`
  order: ${props => props.orderRight || 2};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  min-height: 524px;
  overflow: hidden;
`