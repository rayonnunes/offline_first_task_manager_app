import React from 'react'
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'
import withObservables from '@nozbe/with-observables'
import Container from './Container'
import Avatar from './Avatar'
import Text from './Text'
import DateTime from './DateTime'
import Button from './Button'

const Profile = { Container, Avatar, Text, DateTime }

const ProfileBar = ({ user }) => {
  return (
    <Profile.Container>
      <Profile.Avatar source={{ uri: 'https://picsum.photos/200' }} />
      <Profile.Text>
        {user.length > 0
          ? `Hello, ${user[0].name} ${user[0].lastName}`
          : 'Anonymous'}
      </Profile.Text>
      <Profile.DateTime />
    </Profile.Container>
  )
}
const enhace = withObservables(['user', 'tasks'], ({ database }: any) => ({
  user: database.collections.get('user').query(),
}))

export default withDatabase(enhace(ProfileBar))
