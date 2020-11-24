import styled from 'styled-components/native'
import { ColorProps } from '../../assets/colors/types'

export const HomeContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }: { theme: ColorProps }) => theme.background};
`
