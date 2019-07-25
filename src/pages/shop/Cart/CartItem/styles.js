import styled from 'styled-components'
import { P } from '../../../../styles/fonts'
import { Flex } from '../../../../styles/layout'

export const Image = styled.img`
  height: 100px;
  width: 100px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`

export const RemoveText = styled(P)`
  position: absolute;
  bottom: 10px !important;
  left: 10px !important;
  text-align: center;
  z-index: 99;
`

export const PhotoDesc = styled(Flex)`
  margin-left: 10px;
`
