import { theme } from "../../styles/Theme";
import photo from "../../assets/images/header-bg.webp";
import { Container } from '../Container';
import styled from 'styled-components';

const BgWrapper = styled.div`

${Container} {
  position: relative;

  &::before {
    content: '';
    z-index: 0;
    position: absolute;
    top: -200px;
    right: -90px;
    bottom: 0px;
    left: 0px;
    background-image: url(${photo});
    background-repeat: no-repeat;
    background-size: 720px auto;
    background-position: top right;

      @media ${theme.media.L} {
        background-size: 500px auto;
        top: -120px;
        right: -70px;
      }

      @media ${theme.media.mobile} {
        background-size: 450px auto;
      }
    }
  }

  @media ${theme.media.XXXXL} {
    overflow: hidden;
  }
`
export const S = {
  BgWrapper
}