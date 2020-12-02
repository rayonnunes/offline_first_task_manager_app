import styled from 'styled-components/native'
import { ColorProps } from '../../../../../assets/colors/types'

interface StyledProps {
  theme: ColorProps
  last: boolean
}

export const ItemContainer = styled.TouchableOpacity`
  padding: 16px 0px;
  border-bottom-width: ${(props: StyledProps) => (props.last ? 0 : 1)}px;
  border-bottom-color: ${(props: StyledProps) => props.theme.disabled};
`

export const TitleRow = styled.View`
  flex-direction: row;
`

export const ItemRow = styled.View`
  flex-direction: row;
  align-items: center;
`

export const ItemTitle = styled.Text`
  font-family: Montserrat-Bold;
  max-width: 90%;
  color: ${({ theme }: { theme: ColorProps }) => theme.textColor};
`

export const ItemDateTime = styled.Text`
  font-family: Montserrat-Medium;
  color: ${({ theme }: { theme: ColorProps }) => theme.textColor};
  margin-left: auto;
`

export const ItemStatus = styled.Text`
  font-family: Montserrat-Light;
  font-size: 12px;
  color: ${({ theme }: { theme: ColorProps }) => theme.textColor};
`

export const ItemDescription = styled.Text`
  font-family: Karla-Regular;
  font-size: 12px;
  max-width: 88%;
  color: ${({ theme }: { theme: ColorProps }) => theme.textColor};
  margin-top: 4px;
`
