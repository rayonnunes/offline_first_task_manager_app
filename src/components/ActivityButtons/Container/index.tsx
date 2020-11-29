import React from 'react'
import { ActivityContainer } from './styles'
const Container = ({ children }: { children: React.ReactNode }) => (
  <ActivityContainer>{ children }</ActivityContainer>
)

export default Container
