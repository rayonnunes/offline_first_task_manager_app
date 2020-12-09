import styled from 'styled-components/native'
import { ColorProps } from '../../../../assets/colors/types'

export const FooterView = styled.View`
  border-top-width: 1px;
  border-top-color: ${({ theme }: { theme: ColorProps }) => theme.disabled};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
