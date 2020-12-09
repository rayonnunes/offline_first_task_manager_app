import React from 'react'
import format from 'date-fns/format'
import { DateText, DescriptionText } from './styles'
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
      <DateText>
        {format(parseInt(dueDateTime, 10), 'MMMM do, yyyy HH:mm')}
      </DateText>
      <DescriptionText>{description}</DescriptionText>
    </>
  )
}

export default Body
