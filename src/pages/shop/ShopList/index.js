import React from 'react'
import { fetchPhotos, addToCart, resetPhotos } from '../../../redux/actions/shop'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'styled-bootstrap-grid'
import isEmpty from 'lodash/isEmpty'
import isEqual from 'lodash/isEqual'
import { TextInput } from '../../../styles/elements'
import { Dot, DotWrapper } from '../../../styles/animations'
import Item from './Item'

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

  searchCategory = e => {
    if (isEqual(e.key, 'Enter')) {
      this.props.resetPhotos()
      this.fetchPhotos(1, this.state.search)
    }
  }

  render() {
    const { photos, loading } = this.props
    // const list = [{ urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}, { urls: { regular: 'https://dev-entr-images.imgix.net/jhPLUyWA7HcP1s66h2fv57.jpeg'}}]
    return (
      <Container>
        <Row style={{ marginTop: '150px' }}>
          <TextInput
            onChange={e => this.setState({ search: e.target.value })}
            onKeyPress={this.searchCategory}
            width={'100%'}
            style={{ marginBottom: '40px' }} 
            placeholder='Enter a category to begin shopping' />

            {!isEmpty(photos) && photos.map((photo, i) => (
              <Col key={`item--${i}`}xs={4} sm={4} md={3} style={{ paddingBottom: '4px', paddingRight: '4px', paddingLeft: '4px' }}>
                <Item
                  addToCart={this.addToCart}
                  photo={photo} />
              </Col>
            ))}
        </Row>
        {isEqual(loading, true) && (
           <DotWrapper>
            <Dot delay={'0s'} />
            <Dot delay={'.1s'} />
            <Dot delay={'.2s'} />
          </DotWrapper>
        )}
      </Container>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(ShopList)