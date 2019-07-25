import styled from 'styled-components'
import { pink, pinkDark, white } from './colours'
import { h4Text } from './fonts'

export const Button = styled.a`
  height: 50px;
  display: block;
  text-align: center;
  width: ${props => props.width ? props.width : '175px'};
  background: ${pink};
  border: none;
  outline: 0 !important;
  cursor: pointer;
  color: ${white};
  border-radius: 5px;
  font-size: ${h4Text};
  padding: 15px 0px;
  -webkit-box-shadow: 1px 18px 67px -14px rgba(0,0,0,0.71);
  -moz-box-shadow: 1px 18px 67px -14px rgba(0,0,0,0.71);
  box-shadow: 1px 18px 67px -14px rgba(0,0,0,0.71);
  font-weight: 700;
  letter-spacing: 1px;
  ${props => props.disabled && `
    pointer-events: none !important;
    opacity: 0.8;
  `};

  :hover {
    background: ${pinkDark}
  }
`
