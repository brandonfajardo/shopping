import React from 'react'
import { Flex } from '../../../styles/layout'
import { H1 } from '../../../styles/fonts'
import { Button } from '../../../styles/actions'
import { 
  TitleContainer,
  WelcomeTitle,
  ImagesContainer,
  MainImage,
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
            <Col xs={8} style={{ padding: '0px' }}>
              <MainImage src={image} />
              <Button width={'100%'} onClick={this.startShopping}>START SHOPPING</Button>
            </Col>
            <Col xs={1} style={{ padding: '0px' }} />
            <Col xs={1} style={{ padding: '0px'}}>
              <Flex column={true} justifyCenter={true} style={{ height: '100%'}}>
                <img src={sideImage} style={{ width: '100%', height: '75%' }}/>
              </Flex>
            </Col>
          </ImagesContainer>
        </Container>
      </div>
    )
  }
}

export default Welcome