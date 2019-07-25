import React from 'react'
import { TextInput } from '../../../../styles/elements'
import { Flex } from '../../../../styles/layout'
import { H2, P } from '../../../../styles/fonts'
import { Button } from '../../../../styles/actions'
import isEmpty from 'lodash/isEmpty'
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
          {/* {!isNil(signUpError) && <P error={true} center={true}>{signUpError}</P>}
          {!isNil(signUpSuccess) && <P success={true} center={true}>{signUpSuccess}</P>} */}
        </Flex>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  // signingUp: auth.signingUp,
  // signUpError: auth.signUpError,
  // signUpSuccess: auth.signUpSuccess,
})

const mapDispatchToProps = {
  sendPasswordResetEmail,
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword)