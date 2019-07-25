import styled, { css } from 'styled-components'
export const pink = '#fd95bb'
export const pinkDark = '#fc83af'
export const white = '#fff'
export const dirtyWhite = '#f7f6fb'
export const black = '#000'
export const error = '#eb3941'
export const success ='#65d9a5'
export const overlay = 'rgba(59, 59, 59, 0.65)'
export const lightgray = 'lightgray'

export const colorProps = css`
  color: ${props => 
    props.error ? error 
      : props.success ? success
        : black}
`
