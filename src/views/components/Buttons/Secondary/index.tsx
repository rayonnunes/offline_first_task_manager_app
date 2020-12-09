import React from 'react'
import { GestureResponderEvent } from 'react-native'
import { Button } from './styles'

const Secondary = ({
  children,
  onPress,
}: {
  children: React.ReactNode
  onPress: (event: GestureResponderEvent) => void
}) => <Button onPress={onPress}>{children}</Button>

export default Secondary
