import React from 'react'
import { fetchItems } from '../../../redux/actions/shop'
import { connect } from 'react-redux'

class ShopList extends React.Component {
  componentDidMount () {
    this.fetchItems()
  }

  fetchItems = () => {
    this.props.fetchItems()
  }

  render() {
    return (
      <div>
        some list
      </div>
    )
  }
}

const mapDispatchToProps = {
  fetchItems
}


export default connect(null, mapDispatchToProps)(ShopList)