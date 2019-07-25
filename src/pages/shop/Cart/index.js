import React from 'react'
import { H2, P } from '../../../styles/fonts'
import { connect } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import CartItem from './CartItem'
import { Button } from '../../../styles/actions'
import { Flex } from '../../../styles/layout'

class Cart extends React.Component {
  render() {
    const { cart } = this.props
    const total = cart.length * 1000
    return (
      <div style={{ padding: '10px' }}>
        <H2 style={{ marginBottom: '50px' }} altFont={true} center={true}>Items to review</H2>
        {isEmpty(cart)
          ? <P center={true}>There are no items to review :(</P>
          : <>
            {cart.map(item => <CartItem {...item} />)}
            <div style={{ marginTop: '50px', padding: '5px 0px', borderTop: '1px solid lightgray', borderBottom: '1px solid lightgray' }}>
              <Flex spaceBetween={true}>
                <P>Total:</P>
                <P>${total}</P>
              </Flex>
            </div>
            <Flex justifyCenter={true}>
              <Button width={'100%'}>PURCHASE</Button>
            </Flex>
          </>
        }
      </div>
    )
  }
}

const mapStateToProps = ({ cart }) => ({
  cart: cart.cart
})

export default connect(mapStateToProps)(Cart)