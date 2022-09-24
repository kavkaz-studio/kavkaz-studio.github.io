import styled from 'styled-components'

export const Button = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: #282828;
  color: #cfbeac;
  text-transform: uppercase;
  font-family: 'Barlow Semi Condensed', sans-serif;
  font-weight: bolder;
  border: 1px solid #282828;
  cursor: pointer;
  display: flex;
  justify-content: center;
  transition: .1s;
  
  &:hover {
    background-color: #cfbeac;
    color: #282828;
    border: 1px solid #282828;
  }
  
  &:disabled {
    background-color: #ffffff80;
    color: #10101080;
    border: none;
    pointer-events: none;
  }
`
