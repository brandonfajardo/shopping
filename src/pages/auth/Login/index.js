import React from 'react'
import { Button } from '../../../styles/actions'
import { TextInput } from '../../../styles/elements'
import { LoginContainer } from './styles'
import { connect } from 'react-redux'
import { signIn } from '../../../redux/actions/auth'
import { P } from '../../../styles/fonts'
import { Modal } from '../../../components'
import isEqual from 'lodash/isEqual'
import SignupForm from './SignupForm'
import ResetPasswordForm from './ResetPasswordForm'
import isNil from 'lodash/isNil'

class Login extends React.Component {
  state = {
    email: null,
    password: null,
    displaySignupModal: false,
    displayResetPasswordModal: false,
  }

  signIn = () => {
    const { email, password } = this.state
    
    this.props.signIn(email, password)
  }

  onInputChange = (field, e) => {
    this.setState({
      [field]: e.target.value,
    })
  }

  toggleSignUp = () => {
    this.setState({
      displaySignupModal: !this.state.displaySignupModal,
    })
  }

  toggleResetPassword = () => {
    this.setState({
      displayResetPasswordModal: !this.state.displayResetPasswordModal,
    })
  }

  render () {
    const { signingIn, signInError} = this.props
    const { displaySignupModal, displayResetPasswordModal } = this.state

    return (
      <LoginContainer fluid={true}>
        {isEqual(displaySignupModal, true) && (
          <Modal closeAction={this.toggleSignUp}>
            <SignupForm />
          </Modal>
        )}

        {isEqual(displayResetPasswordModal, true) && (
          <Modal closeAction={this.toggleResetPassword}>
            <ResetPasswordForm />
          </Modal>
        )}

          <div style={{ margin: '0 auto', width: '400px'}}>
            <TextInput
              borderNone={true}
              type='email'
              onChange={e => this.onInputChange('email', e)}
              width={'100%'} 
              placeholder='Email' />
            <div style={{ position: 'relative' }}>
              <TextInput
                style={{ paddingRight: '20px' }}
                borderNone={true}
                type='password'
                onChange={e => this.onInputChange('password', e)}
                width={'100%'}
                placeholder='Password' />
                <P onClick={this.toggleResetPassword} click={true} altFont={true} style={{ color: 'grey', fontWeight: 800, position: 'absolute', right: 15, top: 5 }}>Forgot?</P>
            </div>
            <Button
              disabled={signingIn}
              onClick={this.signIn}
              width={'100%'}
              >
                SIGN IN
            </Button>
            {!isNil(signInError) && <P center={true} error={true}>{signInError}</P>}
            <P onClick={this.toggleSignUp} click={true} center={true}>Don't have an account? Sign up</P>
            </div>
      </LoginContainer>
    )
  }
}

const mapStateToProps = ({ auth }) => ({
  signingIn: auth.signingIn,
  signInError: auth.signInError,
})

const mapDispatchToProps = {
  signIn,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)