import styled from "styled-components";
import { FlexWrapper } from "../../../../components/FlexWrapper";
import { Button } from "../../../../components/Button";
import { theme } from "../../../../styles/Theme";

type ProjectPropsType = {
  title: string,
  text: string,
  src: string,
  link?: string
  btnType: string,
  direction?: string
}

export const Project = (props: ProjectPropsType) => {
  return (
    <StyledProject>
      <FlexWrapper direction={props.direction}>
        <LeftContainer>
          <Title>{props.title}</Title>
          <Text>{props.text}</Text>
          <Button as={Link} href={`${props.link || '#'}`} target="_blank" btnType={"outlined"}>View project</Button>
        </LeftContainer>
        <RightContainer>
          <Image src={props.src} alt="" />
        </RightContainer>
      </FlexWrapper>
    </StyledProject>
  );
}

const StyledProject = styled.div`
  background-color: ${theme.colors.white};
  border-radius: 24px;
  overflow: hidden;
  max-width: 992px;
  width: 100%;
  margin-bottom: 80px;
  box-shadow: 0px 6px 64px 0px ${theme.colors.shadow};
  background-color: ${theme.colors.gray.ultraLight};

  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      flex-direction: column-reverse;
    }
  }

  @media ${theme.media.tablet} {
    margin-bottom: 50px;
  }

  
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  @media ${theme.media.tablet} {
    height: 100%;
    width: auto;
  }

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

const LeftContainer = styled.div`
  padding: 50px;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  @media ${theme.media.tablet} {
    width: 100%;
    padding: 148px 35px 148px 35px;
  }
`

const RightContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  min-height: 524px;
  overflow: hidden;

  @media ${theme.media.tablet} {
    width: 100%;
    max-height: 496px;
  }
`