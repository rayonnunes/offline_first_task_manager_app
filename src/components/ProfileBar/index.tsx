import React, { useEffect } from 'react'
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'
import withObservables from '@nozbe/with-observables'
import Container from './Container'
import Avatar from './Avatar'
import Text from './Text'
import DateTime from './DateTime'
import Button from './Button'

const Profile = { Container, Avatar, Text, DateTime }

const ProfileBar = ({ user, tasks }) => {
  return (
    <>
      <Profile.Container>
        <Profile.Avatar source={{ uri: 'https://picsum.photos/200' }} />
        <Profile.Text>
          {user.length > 0
            ? `Hello, ${user[0].name} ${user[0].lastName}`
            : 'Anonymous'}
        </Profile.Text>
        <Profile.DateTime />
      </Profile.Container>
      <Button user={user[0]} />
      {tasks.length > 0 ? (
        tasks.map((task) => <Text key={task.id}>{task.title}</Text>)
      ) : (
        <Text>NO TASKS</Text>
      )}
    </>
  )
}
const enhace = withObservables(['user', 'tasks'], ({ database }: any) => ({
  user: database.collections.get('user').query(),
  tasks: database.collections.get('tasks').query(),
}))

export default withDatabase(enhace(ProfileBar))
