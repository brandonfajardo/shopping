import React from 'react'
import { Button } from '../../styles/actions'
import { dbAuth } from '../../firebase'
import { H2, P } from '../../styles/fonts'
import { Header, TextContainer } from './styles'
import isEqual from 'lodash/isEqual'
import { Modal } from '../../components'
import Cart from '../../pages/shop/Cart'

class NavBar extends React.Component {
  state = {
    displayCart: false,
  }

  logOut = () => {
    dbAuth.signOut()
  }

  toggleCart = () => {
    this.setState({ displayCart: !this.state.displayCart })
  }

  render() {
    const { displayCart } = this.state
    return (
      <>
        {isEqual(displayCart, true) && (
          <Modal style={{ height: '400px', overflowY: 'scroll' }} closeAction={this.toggleCart}>
            <Cart />
          </Modal>
        )}

        <Header spaceBetween={true}>
          <TextContainer column={true}>
            <H2 altFont={true}>Guilt Free Shopping</H2>
            <P altFont={true}
              onClick={this.toggleCart}
              click={true} bold={true}>
              View cart
            </P>
          </TextContainer>
          <Button onClick={this.logOut}>LOG OUT</Button>
        </Header>
      </>
    )
  }
}

export default NavBar