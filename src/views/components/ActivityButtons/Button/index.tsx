import React from 'react'
import { GestureResponderEvent } from 'react-native'
import { ActivityButton, ActivityText, Icon } from './styles'
const Button = ({
  disabled,
  title,
  onPress,
}: {
  disabled: boolean
  title: string
  onPress: boolean | ((event: GestureResponderEvent) => void)
}) => {
  return (
    <ActivityButton disabled={disabled} onPress={onPress}>
      <Icon name="flag" size={16} />
      <ActivityText>{title.toUpperCase()}</ActivityText>
    </ActivityButton>
  )
}

export default Button
