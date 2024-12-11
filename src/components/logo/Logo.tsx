import styled from "styled-components"

export const Logo = () => {
  return (
    <div>
      <a href="#">
        <StyledLogo>Anastasia Kazantseva</StyledLogo>
      </a>
    </div>
  );
};

const StyledLogo = styled.span`
font-family: "Comfortaa", serif;
  font-size: 18px;
  font-weight: 700;
`