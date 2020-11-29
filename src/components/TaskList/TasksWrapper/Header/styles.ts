import styled from 'styled-components/native'
import { ColorProps } from '../../../assets/colors/types'

export const Title = styled.Text`
  font-family: Montserrat-Bold;
  font-size: 16px;
  padding-bottom: 12px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: { theme: ColorProps }) => theme.disabled};
  color: ${({ theme }: { theme: ColorProps }) => theme.textColor};
`
