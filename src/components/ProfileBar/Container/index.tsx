import React from 'react'
import { ContainerRow } from './styles'
const Container = ({ children }: { children: React.ReactNode }) => (
  <ContainerRow>{children}</ContainerRow>
)

export default Container
