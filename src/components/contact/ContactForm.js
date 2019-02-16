import React from 'react'

import * as Styled from './ContactForm.styled'

const ContactForm = () => {
  return (
    <Styled.Form
      action="success"
      name="contact"
      method="POST"
      netlify-honeypot="favorite-wolf"
      data-netlify="true"
    >
      <Styled.Label hidden>
        <Styled.LabelText>Favorite type of wolf</Styled.LabelText>
        <Styled.Input
          type="text"
          name="favorite-wolf"
          placeholder="Hint: There is no right answer ;)"
        />
      </Styled.Label>
      <Styled.Label>
        <Styled.LabelText>Name</Styled.LabelText>
        <Styled.Input type="text" name="name" />
      </Styled.Label>
      <Styled.Label>
        <Styled.LabelText>Email</Styled.LabelText>
        <Styled.Input type="email" name="email" />
      </Styled.Label>
      <Styled.Label>
        <Styled.LabelText>Message</Styled.LabelText>
        <Styled.Textarea name="message" />
      </Styled.Label>
      <Styled.ButtonContainer>
        <Styled.InputButton type="reset" value="Cancel" />
        <Styled.InputButton type="submit" value="Submit" primary />
      </Styled.ButtonContainer>
    </Styled.Form>
  )
}

export default ContactForm
