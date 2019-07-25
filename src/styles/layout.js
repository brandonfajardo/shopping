import styled from 'styled-components'

// Grid
export const smWidth = '575px'

export const justifyCenter = `
  justify-content: center;
`

export const flexDirectionColumn = `
  flex-direction: column;
`

export const flexDirectionRow = `
  flex-direction: row;
`

export const spaceBetween = `
  justify-content: space-between;
`

export const Flex = styled.div`
  display: flex;
  ${props => props.column && flexDirectionColumn};
  ${props => props.justifyCenter && justifyCenter};
  ${props => props.row && flexDirectionRow};
  ${props => props.spaceBetween && spaceBetween};
`