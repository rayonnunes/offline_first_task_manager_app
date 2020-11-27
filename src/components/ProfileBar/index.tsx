import React from 'react'
import { withDatabase } from '@nozbe/watermelondb/DatabaseProvider'
import withObservables from '@nozbe/with-observables'
import Container from './Container'
import Avatar from './Avatar'
import Text from './Text'
import DateTime from './DateTime'

const Profile = { Container, Avatar, Text, DateTime }

const ProfileBar = ({ user }) => {
  console.log(user)

  return (
    <Profile.Container>
      <Profile.Avatar source={{ uri: 'https://picsum.photos/200' }} />
      <Profile.Text>
        Hello, {user[0].name} {user[0].lastName}
      </Profile.Text>
      <Profile.DateTime />
    </Profile.Container>
  )
}

export default withDatabase(
  withObservables([], ({ database }) => ({
    user: database.collections.get('user').query().observe(),
  }))(ProfileBar),
)
