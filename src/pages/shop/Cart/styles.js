import styled from 'styled-components'
import { H2 } from '../../../styles/fonts'
import { lightgray } from '../../../styles/colours'

export const CartTitle = styled(H2)`
  margin-bottom: 50px;
`

export const CartContainer = styled.div`
  padding: 10px;
`

export const TotalContainer = styled.div`
  margin-top: 50px;
  padding: 5px 0px;
  border-top: 1px solid ${lightgray};
  border-bottom: 1px solid ${lightgray};
`
