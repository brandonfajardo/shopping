import styled from 'styled-components'
import { lightgray } from './colours';

export const TextInput = styled.input`
  padding: ${props => props.padding ? props.padding : '20px 30px'};
  outline: none;
  font-size: 16px;
  font-family: 'Source Code Pro', monospace;
  width: ${props => props.width};
  margin-bottom: 15px;
  border: ${props => props.borderNone ? 'none' : `1px solid ${lightgray}`};
  border-radius: 4px;
  ${props => props.withBorder && `
    border: 1px solid ${lightgray};
  `};
  display: block;
`
