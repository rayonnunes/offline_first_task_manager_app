import styled from 'styled-components/native'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import { ColorProps } from '../../../../assets/colors/types'

export const ActivityButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 130px;
  height: 42px;
  border-radius: 4px;
  background-color: ${({
    theme,
    disabled,
  }: {
    disabled: boolean
    theme: ColorProps
  }) => (disabled ? theme.disabled : theme.primary)};
  shadow-color: ${({ theme }: { theme: ColorProps }) => theme.shadowColor};
  shadow-offset: 0 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`
export const Icon = styled(FontistoIcon)`
  color: ${({ theme }: { theme: ColorProps }) => theme.inverseTextColor};
  margin-right: 6px;
`

export const ActivityText = styled.Text`
  font-family: Montserrat-Bold;
  font-size: 14px;
  color: ${({ theme }: { theme: ColorProps }) => theme.inverseTextColor};
`
