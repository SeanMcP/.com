import styled, { css } from 'styled-components'

export const Form = styled.form`
  width: 100%;
`

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`

export const LabelText = styled.p`
  font-weight: bold;
  margin-bottom: 0.5rem;
`

const formElementStyles = css`
  border: 1px solid ${p => p.theme.secondary};
  border-radius: 0.5rem;
  color: inherit;
  display: block;
  font-family: inherit;
  font-size: inherit;
  padding: 0.5rem;

  @media screen and (max-width: ${p => p.theme.size_mobile}) {
    max-width: initial;
  }
`

export const Input = styled.input`
  ${formElementStyles}
  max-width: 50%;
`

export const Textarea = styled.textarea`
  ${formElementStyles}
  min-height: 5rem;
  resize: vertical;
`

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`

export const InputButton = styled.input`
    background: transparent;
    border: 1px solid ${p => p.theme.primary_dark};
    border-radius: 0.5rem;
    color: ${p => p.theme.primary_dark};
    cursor: pointer;    
    font-family: inherit;
    font-size: inherit;
    padding: 0.5rem 1rem;

    &:first-of-type {
        margin-right: 1rem;
    }

    ${p =>
      p.primary &&
      css`
        background: ${p.theme.primary_dark};
        border-color: ${p.theme.primary_dark};
        color: white;
      `}

    @media screen and (max-width: ${p => p.theme.size_mobile}) {
        flex: 1;
    }
`
