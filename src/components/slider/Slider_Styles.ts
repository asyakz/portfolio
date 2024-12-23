import styled from "styled-components";
import { theme } from "../../styles/Theme";

// Slider

const Slider = styled.div`
  max-width: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 15px;
    height: 15px;
    margin: 5px;
    border-radius: 50%;
    background-color: ${theme.colors.accent};
  }
`

const TextSlider = styled.p`
  margin-bottom: 20px;
`

// Slide

const Slide = styled.div`
  max-width: 33.33%;
  display: flex;
  border-radius: 24px;
  flex-direction: column;
  align-items: center;
  padding: 30px;
  margin-bottom: 20px;
  background-color: ${theme.colors.white};
  box-shadow: 0px 6px 64px 0px ${theme.colors.shadow};

  &:not(:last-child) {
    margin-right: 20px;
  }
`
const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 24px;
`
const Text = styled.span`
`


export const S ={
  Slider,
  Pagination,
  TextSlider,
  Slide,
  Image,
  Text
}