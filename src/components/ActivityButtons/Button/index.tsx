import React from 'react'
import { GestureResponderEvent } from 'react-native'
import { ActivityButton, ActivityText } from './styles'
const Button = ({
  title,
  onPress,
}: {
  title: string
  onPress: (event: GestureResponderEvent) => void
}) => {
  return (
    <ActivityButton onPress={onPress}>
      <ActivityText>{title}</ActivityText>
    </ActivityButton>
  )
}

export default Button
