import React from 'react'
import { Text } from 'react-native'
const Body = ({
  description,
  dueDateTime,
}: {
  description: string
  dueDateTime: string
}) => {
  return (
    <>
      <Text>{dueDateTime}</Text>
      <Text>{description}</Text>
    </>
  )
}

export default Body
