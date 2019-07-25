import React from 'react'
import { H2, P } from '../../../styles/fonts'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import CartItem from './CartItem'
import { Button } from '../../../styles/actions'
import { Flex } from '../../../styles/layout'
import { CartTitle, CartContainer, TotalContainer } from './styles'

class Cart extends React.Component {
  render() {
    const { cart } = this.props
    const total = cart.length * 1000
    return (
      <CartContainer>
        <CartTitle altFont={true} center={true}>Items to review</CartTitle>
        {isEmpty(cart)
          ? <P center={true}>There are no items to review :(</P>
          : <>
            {cart.map(item => <CartItem {...item} />)}
            <TotalContainer>
              <Flex spaceBetween={true}>
                <P>Total:</P>
                <P>${total}</P>
              </Flex>
            </TotalContainer>
            <Flex justifyCenter={true}>
              <Button width={'100%'}>PURCHASE</Button>
            </Flex>
          </>
        }
      </CartContainer>
    )
  }
}

const mapStateToProps = ({ cart }) => ({
  cart: cart.cart
})

export default connect(mapStateToProps)(Cart)