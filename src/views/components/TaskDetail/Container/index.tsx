import React from 'react'
import { Card } from './styles'
const Container = ({ children }: { children: React.ReactNode }) => (
  <Card>{children}</Card>
)

export default Container
