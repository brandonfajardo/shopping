
import styled, { css } from 'styled-components'
import { colorProps } from './colours'

// Sizes
export const h1Text = '30px'
export const h2Text = '22px'
export const h4Text = '16px'
export const bodyText = '14px'

// Font weight
export const bold = 800

export const fontProps = css`
  ${colorProps}
  ${props => props.click && `
    cursor: pointer;
  `};
  ${props => props.center && `
    text-align: center;
  `};
  ${props => props.altFont && sourceCodePro};
  font-weight: ${props => props.bold && bold};
  ${props => props.noMargin && `
    margin: 0px;
  `};
`

export const H1 = styled.h1`
  ${fontProps};
  font-size: ${h1Text};
`

export const H2 = styled.h2`
  ${fontProps};
  font-size: ${h2Text};
`

export const sourceCodePro = css`
  font-family: 'Source Code Pro', monospace;
`

export const P = styled.p`
  ${fontProps};
  font-size: ${bodyText}
`

