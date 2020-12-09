import React from 'react'
import { TextButton } from './styles'

const Text = ({ children }: { children: React.ReactNode }) => (
  <TextButton>{children}</TextButton>
)

export default Text
