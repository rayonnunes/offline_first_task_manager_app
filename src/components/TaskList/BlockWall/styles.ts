import styled from 'styled-components/native'
import { ColorProps } from '../../../assets/colors/types'

interface BlockWallProps {
  show: boolean
  theme: ColorProps
}

export const Layer = styled.View`
  display: ${(props: BlockWallProps) => (props.show ? 'flex' : 'none')};
  position: absolute;
  align-items: center;
  justify-content: flex-start;
  height: 110%;
  width: 105%;
  background-color: ${({ theme }: { theme: ColorProps }) =>
    theme.blockWallColor};
`

export const Message = styled.Text`
  text-align: center;
  margin: 28px 16px 0 16px;
  font-family: Montserrat-Bold;
  font-size: 20px;
  color: ${({ theme }: { theme: ColorProps }) => theme.textColor};
`
