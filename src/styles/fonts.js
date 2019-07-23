
import styled, { css } from 'styled-components'
import { colorProps } from './colours'

// Sizes
export const h1Text = '30px'
export const h2Text = '22px'
export const h4Text = '16px'
export const bodyText = '14px'

export const fontProps = css`
  ${colorProps}
  ${props => props.click && `
    cursor: pointer;
  `};
  ${props => props.center && `
    text-align: center;
  `};
  ${props => props.altFont && sourceCodePro};
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

