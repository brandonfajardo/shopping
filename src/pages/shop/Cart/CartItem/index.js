import React from 'react'
import { Flex } from '../../../../styles/layout'
import { P } from '../../../../styles/fonts'
import { Image, RemoveText, PhotoDesc } from './styles'
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
      <Flex row={true}>
        <div style={{ position: 'relative' }}
          onMouseLeave={() => this.setState({ hoveredImage: null })}
          onMouseOver={() => this.setState({ hoveredImage: id })}
          onClick={() => this.deleteCartItem(id)}>
          {isEqual(id, hoveredImage) && <RemoveText bold={true} noMargin={true}>REMOVE</RemoveText>}
          <Image hover={true} src={urls.thumb} />
        </div>
        <PhotoDesc column={true} justifyCenter={true}>
          <P bold={true} noMargin={true}>{alt_description}</P>
          <P bold={true} noMargin={true}>$1000</P>
        </PhotoDesc>
      </Flex>
    )
  }
}

const mapDispatchToProps = {
  deleteCartItem,
}

export default connect(null, mapDispatchToProps)(CartItem)