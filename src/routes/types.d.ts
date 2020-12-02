import { StackNavigationProp } from '@react-navigation/stack'

type RootStackParamList = {
  Home: undefined
  Task: undefined
}

export type TaskScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Task'
>
