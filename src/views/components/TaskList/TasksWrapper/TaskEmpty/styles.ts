import styled from 'styled-components/native'
import { ColorProps } from '../../../../../assets/colors/types'

export const Container = styled.View`
  min-height: 50px;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const EmptyMessage = styled.Text`
  font-family: Montserrat-Medium;
  font-size: 16px;
  color: ${({ theme }: { theme: ColorProps }) => theme.textColor};
`
