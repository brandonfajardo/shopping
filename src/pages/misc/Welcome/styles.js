import styled from 'styled-components'
import { Flex } from '../../../styles/layout'
import { H1 } from '../../../styles/fonts'
import { Row } from 'styled-bootstrap-grid'

export const TitleContainer = styled(Flex)`
  margin-top: 40px; 
  margin-bottom: 30px;
`

export const WelcomeTitle = styled(H1)`
  @media screen and (min-width: 575px) {
    font-size: 40px;
  }
`

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
`

export const ImagesContainer = styled(Row)`
  height: 60vh;
`

export const SideImageContainer = styled(Flex)`
  height: 100%;
  width: 100%;
  @media screen and (min-width: 575px) {
    display: none;
  }
`

export const SideImage = styled.img`
  position: absolute;
  right: 0;
`
