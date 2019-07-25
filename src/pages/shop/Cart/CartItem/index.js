import React from 'react'
import { Flex } from '../../../../styles/layout'
import { P } from '../../../../styles/fonts'
import { Image } from './styles'
import isEqual from 'lodash/isEqual'
import { connect } from 'react-redux'
import { deleteCartItem } from '../../../../redux/actions/shop'

class CartItem extends React.Component {
  state = {
    hoveredImage: null,
  }

  deleteCartItem = id => {
    this.props.deleteCartItem(id)
  }

  render() {
    const { urls, alt_description, id } = this.props
    const { hoveredImage } = this.state

    return (
      <Flex row={true} style={{ marginBottom: '10px'}}>
        <div style={{ position: 'relative' }} onMouseLeave={() => this.setState({ hoveredImage: null })}onMouseOver={() => this.setState({ hoveredImage: id })} onClick={() => this.deleteCartItem(id)}>
          {isEqual(id, hoveredImage) && <P bold={true} noMargin={true} style={{ position: 'absolute', bottom: 10, left: 10, textAlign: 'center' }}>REMOVE</P>}
          <Image hover={true} src={urls.thumb} style={{ height: '100px', width: '100px', cursor: 'pointer' }} />
        </div>
        <Flex style={{ marginLeft: '10px' }} column={true} justifyCenter={true}>
          <P bold={true} noMargin={true}>{alt_description}</P>
          <P style={{ color: 'grey' }} bold={true} noMargin={true}>$1000</P>
        </Flex>
      </Flex>
    )
  }
}

const mapDispatchToProps = {
  deleteCartItem,
}

export default connect(null, mapDispatchToProps)(CartItem)