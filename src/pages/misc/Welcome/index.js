import React from 'react'
import { Flex } from '../../../styles/layout'
import { H1 } from '../../../styles/fonts'
import { Button } from '../../../styles/actions'
import { 
  TitleContainer,
  WelcomeTitle,
  ImagesContainer,
  MainImage,
  SideImageContainer,
  ShopButton,
} from './styles'
import image from '../../../styles/images/base.png'
import sideImage from '../../../styles/images/base3@2x.png'
import { Container, Row, Col } from 'styled-bootstrap-grid'

class Welcome extends React.Component {
  startShopping = () => {
    this.props.history.push('/shop')
  }

  render () {
    return (
      <div>
        <TitleContainer column={true}>
          <WelcomeTitle altFont={true} center={true}>Welcome to<br />Guilt-Free Shopping</WelcomeTitle>
        </TitleContainer>

        <Container>
          <ImagesContainer>
            <Col xs={2} style={{ padding: '0px' }} />
            <Col xs={8} style={{ padding: '0px', display: 'flex', flexDirection: 'column'}}>
              <MainImage src={image} />
              <ShopButton onClick={this.startShopping}>START SHOPPING</ShopButton>
            </Col>
            <Col xs={1} style={{ padding: '0px' }} />
            <Col xs={1} style={{ padding: '0px'}}>
              <SideImageContainer column={true} justifyCenter={true}>
                <img src={sideImage} style={{ width: '100%', height: '75%' }}/>
              </SideImageContainer>
            </Col>
          </ImagesContainer>
        </Container>
      </div>
    )
  }
}

export default Welcome