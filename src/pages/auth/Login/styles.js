import styled from 'styled-components'
import { dirtyWhite } from '../../../styles/colours'
import { Container } from 'styled-bootstrap-grid'
import facebook from '../../../styles/images/facebook@3x.png'
import twitter from '../../../styles/images/twitter.png'
import { Row } from 'styled-bootstrap-grid'

export const LoginContainer = styled(Container)`
  background: ${dirtyWhite};
  height: 100vh;
`

export const TwitterButton = styled.div`
  background-image: url(${twitter});
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

export const FacebookButton = styled.div`
  background-image: url(${facebook});
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
  @media screen and (min-width: 575px) {
    display: none;
  };
`