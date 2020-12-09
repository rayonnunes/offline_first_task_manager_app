import styled from 'styled-components/native'
import { ColorProps } from '../../../../assets/colors/types'

export const TextButton = styled.Text`
  font-family: Montserrat-Bold;
  font-size: 14px;
  color: ${({ theme }: { theme: ColorProps }) => theme.inverseTextColor};
`
