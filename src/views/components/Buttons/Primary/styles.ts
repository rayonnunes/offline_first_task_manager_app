import styled from 'styled-components/native'
import { BaseButton } from '../styles'
import { ColorProps } from '../../../../assets/colors/types'

export const Button = styled(BaseButton)`
  background-color: ${({ theme }: { theme: ColorProps }) => theme.primary};
`
