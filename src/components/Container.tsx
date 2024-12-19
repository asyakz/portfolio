import styled from "styled-components";
import { theme } from "../styles/Theme";

export const Container = styled.div`
  max-width: 1440px;
  padding-bottom: 144px;
  width: 100%;
  height: 100%;
  min-height: 100%;
  padding-left: 15px;
  padding-right: 15px;
  margin: 0 auto;

    @media ${theme.media.M} {
      padding-bottom: 80px;
    }

`
