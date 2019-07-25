import React from 'react'
import { Photo, Heart, PriceContainer } from './styles'

class Item extends React.Component {
  render() {
    const { photo, addToCart, removeFromCart } = this.props
    const price = 1000
    const isLiked = photo.liked_by_user
    return (
      <div onClick={() => isLiked ? removeFromCart(photo.id) : addToCart(photo)} style={{ position: 'relative' }}>
      <Heart active={photo.liked_by_user} />
      <Photo src={photo.urls.regular} />
      <PriceContainer>
        <span style={{ color: 'white', fontSize: '14px', fontWeight: 700 }}>${price}</span>
      </PriceContainer>
    </div>
    )
  }
}

export default Item