import styled from 'styled-components'

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
`

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(59, 59, 59, 0.65);
`

export const DialogueBox = styled.div`
  overflow: hidden;
  width: 600px;
  background-color: white;
  z-index: 999999;
  padding: 20px 40px;
  border-radius: 8px;
`