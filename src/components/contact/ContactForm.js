import React from 'react';
import PropTypes from 'prop-types';

const ContactForm = ({ heading }) => {
    return (
        <React.Fragment>
            {heading && <h2 className={'ContactForm__heading'}>{heading}</h2>}
            <form
                action=""
                className={'ContactForm'}
                name="contact"
                method="POST"
                data-netlify="true"
            >
                <label className={'ContactForm__label'}>
                    <p className={'ContactForm__label-text'}>Name</p>
                    <input
                        className={'ContactForm__input'}
                        type="text"
                        name="name"
                    />
                </label>
                <label className={'ContactForm__label'}>
                    <p className={'ContactForm__label-text'}>Email</p>
                    <input
                        className={'ContactForm__input'}
                        type="email"
                        name="email"
                    />
                </label>
                <label className={'ContactForm__label'}>
                    <p className={'ContactForm__label-text'}>Message</p>
                    <textarea
                        className={'ContactForm__textarea'}
                        name="message"
                    />
                </label>
                <footer className="ContactForm__button-container">
                    <input
                        className="ContactForm__button ContactForm__button--secondary"
                        type="reset"
                        value="Cancel"
                    />
                    <input
                        className="ContactForm__button ContactForm__button--primary"
                        type="submit"
                        value="Submit"
                    />
                </footer>
            </form>
        </React.Fragment>
    );
};

ContactForm.propTypes = {
    heading: PropTypes.string
};

export default ContactForm;
