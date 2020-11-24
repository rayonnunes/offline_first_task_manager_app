import styled from 'styled-components'
import FeatherIcon from 'react-native-vector-icons/Feather'
import { ColorProps } from '../../assets/colors/types'

export const Icon = styled(FeatherIcon)`
  color: ${({
    theme,
    color,
  }: {
    theme: ColorProps
    color: 'primary' | 'warning' | 'success' | 'danger'
  }) => theme[color]};
  margin-right: 14px;
`
