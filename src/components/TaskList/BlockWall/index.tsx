import React from 'react'
import { Layer, Message } from './styles'

const BlockWall = ({ show }: { show: boolean }) => (
  <Layer show>
    <Message>Press 'Check-in' to start your activities </Message>
  </Layer>
)

export default BlockWall
