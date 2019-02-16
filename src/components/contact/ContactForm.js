import React from 'react'
import PropTypes from 'prop-types'

import * as Styled from './ContactForm.styled'

const ContactForm = ({ heading }) => {
  return (
    <React.Fragment>
      {heading && <h2 className={'_heading'}>{heading}</h2>}
      <Styled.Form
        action="success"
        name="contact"
        method="POST"
        data-netlify="true"
      >
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
    </React.Fragment>
  )
}

ContactForm.propTypes = {
  heading: PropTypes.string
}

export default ContactForm
