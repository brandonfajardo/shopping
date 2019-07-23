import React from 'react'
import { Button } from '../../styles/actions'
import { dbAuth } from '../../firebase'

class NavBar extends React.Component {
  logOut = () => {
    dbAuth.signOut()
  }

  render() {
    return (
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
        <Button onClick={this.logOut} style={{ marginRight: '10px', marginTop: '10px' }}>LOG OUT</Button>
      </div>
    )
  }
}

export default NavBar