import React from 'react'
import { MainText } from './styles'

const Text = ({ children }: { children: React.ReactNode }) => (
  <MainText>{children}</MainText>
)

export default Text
