import React from 'react'
import { TextInput } from '../../../../styles/elements'
import { Flex } from '../../../../styles/layout'
import { H2, P } from '../../../../styles/fonts'
import { Button } from '../../../../styles/actions'
import isEmpty from 'lodash/isEmpty'
import isNil from 'lodash/isNil'
import { connect } from 'react-redux'
import { sendPasswordResetEmail } from '../../../../redux/actions/auth'

class ResetPassword extends React.Component {
  state = {
    email: null,
  }

  resetPassword = () => {
    this.props.sendPasswordResetEmail(this.state.email)
  }

  render() {
    const { email } = this.state
    const { resetMessage } = this.props
    return (
      <div>
        <Flex column={true}>
          <H2 center={true}>Reset password</H2>
          <TextInput
            onChange={e => this.setState({ email: e.target.value })}
            withBorder={true}
            placeholder='Enter email' />
          <Button
            disabled={isEmpty(email)}
            onClick={this.resetPassword}
            width={'100%'}>
            SIGN UP
          </Button>
          {!isNil(resetMessage) && <P success={true} center={true}>{resetMessage}</P>}
        </Flex>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  resetMessage: auth.resetMessage,
})

const mapDispatchToProps = {
  sendPasswordResetEmail,
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)