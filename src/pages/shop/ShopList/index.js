import React from 'react'
import { fetchPhotos, addToCart, resetPhotos, deleteCartItem } from '../../../redux/actions/shop'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import { TextInput } from '../../../styles/elements'
import { Dot, DotWrapper } from '../../../styles/animations'
import { NavBar } from '../../../components'
import Item from './Item'
import { ShopContainer, ItemCol } from './styles'

class ShopList extends React.Component {
  state = {
    active: false,
    search: '',
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false)
    this.fetchPhotos(1, 'clothes')
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false)
  }

  fetchPhotos = (pageNum, searchTerm) => {
    const { photos, fetchPhotos } = this.props

    const page = isEmpty(photos) ? 1 : pageNum
    fetchPhotos(page, searchTerm)
  }

  onScroll = () => {
    const { lastPage, currentPage, loading } = this.props
    if (!isEqual(lastPage, currentPage) && isEqual(loading, false) && window.innerHeight + window.scrollY >= document.body.offsetHeight - 10) {
      this.fetchPhotos(currentPage + 1, this.props.searchTerm)
    }
  }

  addToCart = photo => {
    this.props.addToCart(photo)
  }

  removeFromCart = photoId => {
    this.props.deleteCartItem(photoId)
  }

  searchCategory = e => {
    if (isEqual(e.key, 'Enter')) {
      this.props.resetPhotos()
      this.fetchPhotos(1, this.state.search)
    }
  }

  render() {
    const { photos, loading } = this.props
    return (
      <>
        <NavBar />
        <Container>
          <ShopContainer>
            <Col>
              <TextInput
                onChange={e => this.setState({ search: e.target.value })}
                onKeyPress={this.searchCategory}
                width={'100%'}
                style={{ marginTop: '20px', marginBottom: '40px' }} 
                placeholder='Enter a category to begin shopping' />
            </Col>

          {!isEmpty(photos) && photos.map((photo, i) => (
            <ItemCol key={`item--${i}`} xs={4} sm={4} md={3}>
              <Item
                addToCart={this.addToCart}
                removeFromCart={this.removeFromCart}
                photo={photo} />
            </ItemCol>
          ))}
          </ShopContainer>
          {isEqual(loading, true) && (
            <DotWrapper>
              <Dot delay={'0s'} />
              <Dot delay={'.1s'} />
              <Dot delay={'.2s'} />
            </DotWrapper>
          )}
        </Container>
      </>
    )
  }
}

const mapStateToProps = ({ photos }) => ({
  loading: photos.loading,
  currentPage: photos.currentPage,
  photos: photos.photos,
  lastPage: photos.lastPage,
  searchTerm: photos.searchTerm,
})

const mapDispatchToProps = {
  fetchPhotos,
  addToCart,
  resetPhotos,
  deleteCartItem
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopList)