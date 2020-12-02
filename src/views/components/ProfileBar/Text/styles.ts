import styled from 'styled-components/native'
import { ColorProps } from '../../../../assets/colors/types'

export const MainText = styled.Text`
  margin-left: 12px;
  font-family: Montserrat-Medium;
  font-size: 16px;
  color: ${({ theme }: { theme: ColorProps }) => theme.textColor};
`
