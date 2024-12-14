import styled, { css } from 'styled-components';
import { theme } from '../styles/Theme';

type ButtonPropsType = {
  color?: string
  btnType: 'outlined' | 'primary'
  active?: boolean
}

export const Button = styled.button<ButtonPropsType>`
cursor: pointer;
min-width: 115px;
min-height: 43px;
padding: 8px 24px 8px 24px;
border-radius: 8px;
font-family: "Roboto", serif;
font-size: 18px;
font-weight: 700;
line-height: 27px;
transition: color .5s ease-in-out,
            border .5s ease-in-out,
            background-color 1s ease-in-out;

  &:hover {
    border-color:  ${theme.colors.primaryFont};
    background-color:  ${theme.colors.secondary};
    color:  ${theme.colors.primaryFont};
  }

&:not(:last-child) {
  margin-right: 12px;
}

  // outlined
  ${props => props.btnType === 'outlined' && css<ButtonPropsType>`
  border: 2px solid ${props => props.color || `${theme.colors.primaryFont}`};
  color: ${props => props.color || `${theme.colors.primaryFont}`};
  background-color: transparent;
  `}

  // primary
  ${props => props.btnType === 'primary' && css<ButtonPropsType>`
  background-color: ${props => props.color || `${theme.colors.accent}`};
  border: 2px solid ${props => props.color || `${theme.colors.accent}`};
  color: ${theme.colors.primaryFont};
  `}

  ${props => props.active && css<ButtonPropsType>`
  box-shadow: 5px 5px 5px 5px #3534342e;
  `}

`