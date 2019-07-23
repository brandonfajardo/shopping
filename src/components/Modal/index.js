import React from 'react'
import { ModalContainer, ModalOverlay, DialogueBox } from './styles'

const Modal = ({ children, closeAction }) => {
  return (
    <ModalContainer>
      <DialogueBox>
        {children}
      </DialogueBox>
      <ModalOverlay onClick={() => closeAction()}/>
    </ModalContainer>
  )
}

export default Modal