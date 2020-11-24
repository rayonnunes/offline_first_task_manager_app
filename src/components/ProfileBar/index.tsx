import React from 'react'
import { useSelector } from 'react-redux'
import { StoreState } from '../../store/createStore'
import Container from './Container'
import Avatar from './Avatar'
import Text from './Text'
import DateTime from './DateTime'

const Profile = { Container, Avatar, Text, DateTime }

const ProfileBar = () => {
  const { user } = useSelector((state: StoreState) => state)

  return (
    <Profile.Container>
      <Profile.Avatar source={{ uri: 'https://picsum.photos/200' }} />
      <Profile.Text>
        Hello, {user.userData.name} {user.userData.lastName}
      </Profile.Text>
      <Profile.DateTime />
    </Profile.Container>
  )
}

export default ProfileBar
