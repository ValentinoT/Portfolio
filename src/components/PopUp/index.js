import React, { useEffect } from 'react'
import { Overlay, ContainerPopUp, ButtonClose } from './styles'
import { Close } from '../../icons/Close'

const ClosePopUp = (setOpen, name, email, subject, message) => {
  setOpen(false)
  if (name && email && subject && message) {
    name.reset()
    name.removeActive()
    email.reset()
    email.removeActive()
    subject.reset()
    subject.removeActive()
    message.reset()
    message.removeActive()
  }
}

const ComponentPopUp = ({ children, setOpen, name, email, subject, message }) => {
  console.log(setOpen)
  useEffect(() => {
    const overlay = document.querySelector('#overlay')
    overlay.addEventListener('click', (e) => {
      if (e.target.id === 'overlay') {
        ClosePopUp(setOpen, name, email, subject, message)
      }
    })
  })

  return (
    <Overlay id='overlay'>
      <ContainerPopUp>
        <ButtonClose onClick={() => ClosePopUp(setOpen, name, email, subject, message)}>
          <Close />
        </ButtonClose>
        {children}
      </ContainerPopUp>
    </Overlay>
  )
}

export const PopUp = ({ children, open, setOpen, name, email, subject, message }) => {
  return (
    <>
      {open &&
        <ComponentPopUp
          setOpen={setOpen}
          children={children}
          name={name}
          email={email}
          subject={subject}
          message={message}
        />}
    </>
  )
}
