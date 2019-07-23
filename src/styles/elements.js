import styled from 'styled-components'


export const TextInput = styled.input`
  padding: 20px 30px;
  outline: none;
  font-size: 16px;
  font-family: 'Source Code Pro', monospace;
  width: ${props => props.width};
  margin-bottom: 15px;
  border: none;
  border-radius: 4px;
  ${props => props.withBorder && `
    border: 1px solid lightgray;
  `};
`
