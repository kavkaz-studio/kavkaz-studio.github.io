import styled, { css } from 'styled-components'

const subColor = '#e6e3d0'
const mainColor = '#cfbeac'

const shrinkLabelStyles = css`
  top: 7px;
  font-size: 12px;
  color: ${mainColor};
`

export const FormInputLabel = styled.label`
  color: ${subColor};
  font-size: 16px;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 30px;
  transition: 300ms ease all;
  ${({ shrink }) => shrink && shrinkLabelStyles}
`

export const Input = styled.input`
  background: none;
  background-color: transparent;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 5px;
  display: block;
  min-width: 120px;
  width: 100%;
  max-width: 150px;
  border: none;
  border-radius: 0px;
  border-bottom: 1px solid ${subColor};
  margin: 15px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }
`

export const Group = styled.div`
  position: relative;
  margin: 0 10px;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`

export const TextArea = styled.textarea`
  background: none;
  background-color: transparent;
  color: ${subColor};
  font-size: 18px;
  padding: 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0px;
  border-bottom: 1px solid ${subColor};
  margin: 25px 0;
  
  &:focus {
    outline: none;
  }
  
  &:focus ~ ${FormInputLabel} {
    ${shrinkLabelStyles}
  }
`