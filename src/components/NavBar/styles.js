import styled from 'styled-components'
import { Flex } from '../../styles/layout'
import { white } from '../../styles/colours'

export const Header = styled(Flex)`
  padding: 5px;
  background: ${white};
  position: fixed;
  top: 0;
  z-index: 99999;
  width: 100%;
  -webkit-box-shadow: -1px -6px 17px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: -1px -6px 17px -2px rgba(0,0,0,0.75);
  box-shadow: -1px -6px 17px -2px rgba(0,0,0,0.75);
`

export const TextContainer = styled(Flex)`
  margin-left: 15px;
`