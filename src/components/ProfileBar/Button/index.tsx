import React, { useCallback } from 'react'
import { TouchableOpacity } from 'react-native'
import Text from '../Text'
import withObservables from '@nozbe/with-observables'

const Button = ({ user }: any) => {
  const createTask = useCallback(async () => {
    const newTask = {
      title: 'A Frying Pan, Spick and Span',
      description:
        "Many think that the life of a witcher consists of nothing but adventure after grand adventure, an endless stream of contracts on manticores, bruxae and other exotic beasts. In truth, Geralt would often take on more banal tasks, ones lesser bards fear mentioning, for they lack the skill required to make a masterwork of the mundane. By way of example, once in White Orchard he was hired to retrieve a woman's... frying pan. A mysterious gentleman had borrowed the frying pan from a little old lady and not returned it. While investigating this damned unneighborly act, Geralt discovered the delinquent borrower had other, more serious sins on his conscience... murder, for example. The half-burned notes Geralt found in his abandoned hut made it clear he was interested in the movements of Nilfgaardian forces and confidential military secrets - in other words, the man was a spy. Geralt found the frying pan and returned it to the old woman. She was overcome with joy and gratitude - not only did she have her precious cooking utensil back, but someone had scrubbed it clean for her as well!",
      status: 'overdue',
      dueDateTime: '2020-11-22T18:55:24-03:00',
    }
    await user.addTask(newTask)
  }, [user])

  return (
    <TouchableOpacity onPress={() => createTask()}>
      <Text> Create Offline Task </Text>
    </TouchableOpacity>
  )
}

const enhance = withObservables(['user'], ({ user }) => {
  return {
    user,
  }
})

export default enhance(Button)
