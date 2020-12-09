import styled from 'styled-components/native'
import { ColorProps } from '../../../../assets/colors/types'

export const Card = styled.View`
  padding: 16px 9px;
  margin: 6px;
  background-color: ${({ theme }: { theme: ColorProps }) =>
    theme.backgroundContainer};
  border-radius: 4px;
  shadow-color: ${({ theme }: { theme: ColorProps }) => theme.shadowColor};
  shadow-offset: 0 2px;
  shadow-opacity: 0.25;
  shadow-radius: 3.84px;
  elevation: 5;
`
