import styled from 'styled-components/native'
import { ColorProps } from '../../../../assets/colors/types'

export const DateTimeWrapper = styled.View`
  flex-direction: column;
  align-items: center;
  margin-left: auto;
`

export const TimeText = styled.Text`
  font-size: 18px;
  font-family: Montserrat-Black;
  color: ${({ theme }: { theme: ColorProps }) => theme.textColor};
`

export const DateText = styled.Text`
  font-size: 10px;
  font-family: Montserrat-Light;
  color: ${({ theme }: { theme: ColorProps }) => theme.textColor};
`
