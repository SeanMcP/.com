import React from 'react'
import PropTypes from 'prop-types'

const ContactForm = ({ heading }) => {
  return (
    <React.Fragment>
      {heading && <h2 className={'_heading'}>{heading}</h2>}
      <form
        action="success"
        className={'ContactForm'}
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <label className={'_label'}>
          <p className={'_label-text'}>Name</p>
          <input className={'_input'} type="text" name="name" />
        </label>
        <label className={'_label'}>
          <p className={'_label-text'}>Email</p>
          <input className={'_input'} type="email" name="email" />
        </label>
        <label className={'_label'}>
          <p className={'_label-text'}>Message</p>
          <textarea className={'_textarea'} name="message" />
        </label>
        <footer className="_button-container">
          <input className="_button -secondary" type="reset" value="Cancel" />
          <input className="_button -primary" type="submit" value="Submit" />
        </footer>
      </form>
    </React.Fragment>
  )
}

ContactForm.propTypes = {
  heading: PropTypes.string
}

export default ContactForm
