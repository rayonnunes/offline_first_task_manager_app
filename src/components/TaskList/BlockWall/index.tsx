import React from 'react'
import { Layer, Message } from './styles'

const BlockWall = ({ show, message }: { show: boolean; message: string }) =>
  show ? (
    <Layer>
      <Message>{message}</Message>
    </Layer>
  ) : (
    <></>
  )

export default BlockWall
