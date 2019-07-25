import React from 'react'
import { Button } from '../../styles/actions'
import { dbAuth } from '../../firebase'
import { H2, P } from '../../styles/fonts'
import { Flex } from '../../styles/layout'
import { Header } from './styles'
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

        <Header>
          <Flex style={{ marginLeft: '15px' }} column={true}>
            <H2 altFont={true}>Guilt Free Shopping</H2>
            <P altFont={true} onClick={this.toggleCart} click={true} bold={true}>View cart</P>
          </Flex>
          <Button onClick={this.logOut} style={{ marginRight: '10px', marginTop: '10px' }}>LOG OUT</Button>
        </Header>
      </>
    )
  }
}

export default NavBar