import React from 'react'
import Button from './Button'
import Container from './Container'

const Activity = { Container }

const ActivityButtons = () => {
  return (
    <Activity.Container>
      <Button title="Check-in" onPress={() => console.log('press')} />
      <Button title="Check-out" onPress={() => console.log('press')} />
    </Activity.Container>
  )
}

export default ActivityButtons
