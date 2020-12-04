import { RouteProp } from '@react-navigation/native'

interface StackParamList {
  task: {
    title: string
    id: string
  }
}

type RootStackParamList = {
  Home: undefined
  Task: StackParamList
}

export type TaskScreenNavigationProp = RouteProp<RootStackParamList, 'Task'>
