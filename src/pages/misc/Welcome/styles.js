import styled from 'styled-components'
import { Flex } from '../../../styles/layout'
import { H1 } from '../../../styles/fonts'
import { Row, Col } from 'styled-bootstrap-grid'
import { Button } from '../../../styles/actions'
import { smWidth } from '../../../styles/layout'

export const TitleContainer = styled(Flex)`
  margin-top: 40px; 
  margin-bottom: 30px;
`

export const WelcomeTitle = styled(H1)`
  @media screen and (min-width: ${smWidth}) {
    font-size: 40px;
  }
`

export const MainImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  @media screen and (min-width: ${smWidth}) {
    width: 400px;
    height: 60vh;
    margin: 0 auto;
  };
`

export const ImagesContainer = styled(Row)`
  height: 60vh;
`

export const SideImageContainer = styled(Flex)`
  height: 100%;
  @media screen and (min-width: ${smWidth}) {
    display: none;
  }
`

export const SideImage = styled.img`
  width: 100%;
  height: 75%;
`

export const ShopButton = styled(Button)`
  width: 100%;
  margin-top: 20px !important;

  @media screen and (min-width: ${smWidth}) {
    margin: 0 auto;
    width: 400px;
  };
`

export const Content = styled(Col)`
  padding: 0px;
  display: flex;
  flex-direction: column;
`