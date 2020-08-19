import React, { useState } from 'react'
import { Form, ContainerInput, Label, InputText, InputTextarea, ContainerMessageSent, Title, TextSent } from './styles'
import { Button } from '../Generals/Button'
import { ButtonContact } from '../../icons/ButtonContact'
import { useInput } from '../../hooks/useInput'
import { PopUp } from '../PopUp'
import { IconMessageSent } from '../../icons/IconMessageSent'

export const ContactForm = () => {
  const name = useInput('', 'inputName', 'labelName')
  const email = useInput('', 'inputEmail', 'labelEmail')
  const subject = useInput('', 'inputSubject', 'labelSubject')
  const message = useInput('', 'inputMessage', 'labelMessage')

  const [open, setOpen] = useState(false)

  const submitForm = (e) => {
    e.preventDefault()
    const form = e.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        setOpen(true)
      } else {
        console.log('error')
      }
    }
    xhr.send(data)
  }

  return (
    <Form action='https://formspree.io/xdowjbkz' method='POST' onSubmit={submitForm}>
      <ContainerInput>
        <Label htmlFor='inputName' id='labelName'>Nombre</Label>
        <InputText type='text' name='name' id='inputName' required value={name.value} onChange={name.onChange} />
      </ContainerInput>
      <ContainerInput>
        <Label htmlFor='inputEmail' id='labelEmail'>Email</Label>
        <InputText type='email' name='_replyto' id='inputEmail' required value={email.value} onChange={email.onChange} />
      </ContainerInput>
      <ContainerInput>
        <Label htmlFor='inputSubject' id='labelSubject'>Asunto</Label>
        <InputText type='text' name='subject' id='inputSubject' required value={subject.value} onChange={subject.onChange} />
      </ContainerInput>
      <ContainerInput>
        <Label htmlFor='inputMessage' id='labelMessage'>Mensaje</Label>
        <InputTextarea name='message' id='inputMessage' required value={message.value} onChange={message.onChange} />
      </ContainerInput>
      <Button icon={<ButtonContact />}>Enviar</Button>
      <PopUp open={open} setOpen={setOpen} name={name} email={email} subject={subject} message={message}>
        <MessageSent name={name.value} />
      </PopUp>
    </Form>
  )
}

const MessageSent = ({ name }) => {
  return (
    <ContainerMessageSent>
      <IconMessageSent />
      <Title size='28px'>Mensaje Enviado!</Title>
      <TextSent size='16px' lh='24px'>
        Gracias por tu mensaje <b>{`${name}`}</b>,
        responderé lo más pronto posible :)
      </TextSent>
    </ContainerMessageSent>
  )
}
