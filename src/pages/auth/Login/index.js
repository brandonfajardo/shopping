import React from 'react'
import { Button } from '../../../styles/actions'
import { TextInput } from '../../../styles/elements'
import { LoginContainer, InnerContainer, FacebookButton, TwitterButton } from './styles'
import { connect } from 'react-redux'
import { signIn } from '../../../redux/actions/auth'
import { P } from '../../../styles/fonts'
import { Flex } from '../../../styles/layout'
import { Modal } from '../../../components'
import isEqual from 'lodash/isEqual'
import SignupForm from './SignupForm'
import ResetPasswordForm from './ResetPasswordForm'
import isNil from 'lodash/isNil'
import firebase, { dbAuth } from '../../../firebase'
import { Col } from 'styled-bootstrap-grid'
import { AccentImage, Image, ImagesContainer } from './styles'
import shoes from '../../../styles/images/group@3x.png'
import accent from '../../../styles/images/layerCopy2@2x.png'

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

  signInWithProvider = label => {
    const provider = isEqual(label, 'facebook')
      ? new firebase.auth.FacebookAuthProvider()
      : new firebase.auth.TwitterAuthProvider()

    dbAuth.signInWithPopup(provider)
      .then(res => {
        // do something with result
      })
      .catch((e) => {
        // do something with error
      })
  }

  render () {
    const { signingIn, signInError} = this.props
    const { displaySignupModal, displayResetPasswordModal } = this.state
    return (
      <LoginContainer fluid={true} style={{ position: 'relative' }}>
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

          <ImagesContainer>
            <Col xs={6} style={{ padding: '0px' }} />
            <Col xs={6} style={{ padding: '0px' }}>
              <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '100%', right: 0 }}>
                <AccentImage src={accent}/>
                <Image src={shoes} />
              </div>
            </Col>
          </ImagesContainer>

          <InnerContainer>
            <Flex column={true}>
            <TextInput
              borderNone={true}
              type='email'
              onChange={e => this.onInputChange('email', e)}
              width={'300px'} 
              placeholder='Email' />
            <div style={{ position: 'relative' }}>
              <TextInput
                style={{ paddingRight: '20px' }}
                borderNone={true}
                type='password'
                onChange={e => this.onInputChange('password', e)}
                width={'300px'}
                placeholder='Password' />
                <P onClick={this.toggleResetPassword} click={true} altFont={true} style={{ color: 'grey', fontWeight: 800, position: 'absolute', right: 15, top: 5 }}>Forgot?</P>
            </div>
            <Button
              disabled={signingIn}
              onClick={this.signIn}
              width={'300px'}
              >
                SIGN IN
            </Button>
            {!isNil(signInError) && <P center={true} error={true}>{signInError}</P>}
            <P onClick={this.toggleSignUp} click={true} center={true}>Don't have an account? Sign up</P>

            <Flex justifyCenter={true}>
              <Flex column={true}>
                <FacebookButton onClick={() => this.signInWithProvider('facebook')} />
                <TwitterButton onClick={() => this.signInWithProvider('twitter')} />
              </Flex>
            </Flex>
            </Flex>
        </InnerContainer>
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