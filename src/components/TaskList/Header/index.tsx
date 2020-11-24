import React from 'react'
import { Title } from './styles'

const Header = ({ children }: { children: React.ReactNode }) => (
  <Title>{children}</Title>
)

export default Header
