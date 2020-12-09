import styled from 'styled-components/native'
import { ColorProps } from '../../../../assets/colors/types'

export const HeaderWrapper = styled.View`
  justify-content: center;
  padding: 16px 6px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: { theme: ColorProps }) => theme.disabled};
`

export const HeaderRow = styled.View`
  flex-direction: row;
`

export const HeaderText = styled.Text`
  font-family: Montserrat-Bold;
  font-size: 19px;
`

export const HeaderStatus = styled.Text`
  font-family: Montserrat-Light;
  font-size: 16px;
  margin-top: 6px;
`
