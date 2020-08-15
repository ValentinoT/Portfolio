import React, { useState } from 'react'
import { Form, ContainerInput, Label, InputText, InputTextarea } from './styles'
import { Button } from '../Generals/Button'
import { ButtonContact } from '../../icons/ButtonContact'
import { useInput } from '../../hooks/useInput'

export const ContactForm = () => {
  const name = useInput('', 'inputName', 'labelName')
  const email = useInput('', 'inputEmail', 'labelEmail')
  const subject = useInput('', 'inputSubject', 'labelSubject')
  const message = useInput('', 'inputMessage', 'labelMessage')

  const [status, setStatus] = useState('')

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
        name.reset()
        name.removeActive()
        email.reset()
        email.removeActive()
        subject.reset()
        subject.removeActive()
        message.reset()
        message.removeActive()
        setStatus('enviado')
      } else {
        setStatus('error')
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
        <Label htmlFor='email' id='labelEmail'>Email</Label>
        <InputText type='email' name='_replyto' id='inputEmail' required value={email.value} onChange={email.onChange} />
      </ContainerInput>
      <ContainerInput>
        <Label htmlFor='subject' id='labelSubject'>Asunto</Label>
        <InputText type='text' name='subject' id='inputSubject' required value={subject.value} onChange={subject.onChange} />
      </ContainerInput>
      <ContainerInput>
        <Label htmlFor='message' id='labelMessage'>Mensaje</Label>
        <InputTextarea name='message' id='inputMessage' required value={message.value} onChange={message.onChange} />
      </ContainerInput>
      <Button icon={<ButtonContact />}>Enviar</Button>
      <p>{status}</p>
    </Form>
  )
}
