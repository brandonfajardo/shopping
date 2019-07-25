import styled from 'styled-components'

export const Heart = styled.div`
  width: 100px;
  height: 100px;
  background: url("https://cssanimation.rocks/images/posts/steps/heart.png") no-repeat;
  background-position: 0 0;
  cursor: pointer;
  transition: background-position 1s steps(28);
  transition-duration: 0s;
  position: absolute;
  top: -25px;
  left: -25px;
  ${props => props.active && `
    transition-duration: 1s;
    background-position: -2800px 0;
  `};
`

export const Photo = styled.img`
  width: 100%;
  height: 170px;
  cursor: pointer;
`

export const PriceContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
  border-radius: 14px;
  background: #fd95bb;
  padding: 5px 15px;
`