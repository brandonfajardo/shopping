import styled, { css } from 'styled-components'
import { dirtyWhite } from '../../../styles/colours'
import { P } from '../../../styles/fonts'
import { Container } from 'styled-bootstrap-grid'
import facebook from '../../../styles/images/facebook@3x.png'
import twitter from '../../../styles/images/twitter.png'
import { Row } from 'styled-bootstrap-grid'
import { smWidth } from '../../../styles/layout'

export const LoginContainer = styled(Container)`
  background: ${dirtyWhite};
  height: 100vh;
`

export const providerProps = css`
  background-size: contain;
  height: 60px;
  background-repeat: no-repeat;
  width: 270px;
  margin-top: 15px;
  cursor: pointer;
  display: flex;
  justify-self: center;
  flex-direction: row;
`

export const TwitterButton = styled.div`
  background-image: url(${twitter});
  ${providerProps};
`

export const FacebookButton = styled.div`
  background-image: url(${facebook});
  ${providerProps};
`

export const InnerContainer = styled.div`
  /* margin: 0 auto; */
  width: 350px; 
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
`

export const Image = styled.img`
  width: 85%;
  height: 80%;
  top: 50;
  border-radius: 5px;
  position: absolute;
  right: 0px;
`

export const AccentImage = styled.img`
  width: 100%;
  height: 60%;
  top: 50px;
  left: 0px;
  border-radius: 5px;
  position: absolute;
  bottom: 0;
`

export const ImagesContainer = styled(Row)`
  @media screen and (min-width: ${smWidth}) {
    display: none;
  };
`

export const ForgotPassText = styled(P)`
  color: grey !important;
  font-weight: 800 !important;
  position: absolute !important;
  right: 15px !important;
  top: 5px !important;
`

export const SideContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  right: 0;
`
