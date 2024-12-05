import styled from "styled-components";

type SlidePropsType = {
  src: string
}

export const Slide = (props: SlidePropsType) => {
  return (
    <StyledSlide>
          <Image src={props.src} />
          <Text>
            Lorem ipsum dolor sit
          </Text>
    </StyledSlide>
  );
}

const StyledSlide = styled.div`
  width: 100%;
  max-width: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin-right: 20px;
  background-color: #4d4d7a;
`
const Image = styled.img`
  max-width: 400px;
  height: auto;
  
`
const Text = styled.span`
`