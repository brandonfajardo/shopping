import React from 'react'
import { TextInput } from '../../../../styles/elements'
import { Flex } from '../../../../styles/layout'
import { H2, P } from '../../../../styles/fonts'
import { Button } from '../../../../styles/actions'
import isNil from 'lodash/isEmpty'
import { connect } from 'react-redux'
import { signUp } from '../../../../redux/actions/auth'

class Signup extends React.Component {
  state = {
    email: null,
    password: null,
  }

  onInputChange = (field, e) => {
    this.setState({
      [field]: e.target.value,
    })
  }

  signUp = () => {
    const { email, password } = this.state
    this.props.signUp(email, password)
  }

  render() {
    const { email, password } = this.state
    const { signingUp, signUpError, signUpSuccess } = this.props
    const isValid = !isNil(email) && !isNil(password)
    return (
      <div>
        <Flex column={true}>
          <H2 center={true}>Sign up for an account!</H2>
          <TextInput
            onChange={e => this.onInputChange('email', e)}
            withBorder={true}
            placeholder='Enter email' />
          <TextInput
            type='password'
            onChange={e => this.onInputChange('password', e)}
            withBorder={true}
            placeholder='Enter password' />
          <Button
            onClick={this.signUp}
            disabled={!isValid || signingUp}
            width={'100%'}>
            SIGN UP
          </Button>
          {!isNil(signUpError) && <P error={true} center={true}>{signUpError}</P>}
          {!isNil(signUpSuccess) && <P success={true} center={true}>{signUpSuccess}</P>}
        </Flex>
      </div>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  signingUp: auth.signingUp,
  signUpError: auth.signUpError,
  signUpSuccess: auth.signUpSuccess,
})

const mapDispatchToProps = {
  signUp,
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)