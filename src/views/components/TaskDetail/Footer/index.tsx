import React from 'react'
import withObservables from '@nozbe/with-observables'
import { TasksResponseProps } from '../../../../store/modules/tasks/types'
import Button from '../../../components/Buttons'
import { FooterView } from './styles'

const Footer = ({ tasks }: { tasks: TasksResponseProps }) => {
  const updateStatus = async (status: TasksResponseProps['status']) => {
    await tasks.updateStatus(status)
  }
  return (
    <FooterView>
      {tasks.status === 'started' && (
        <>
          <Button.Secondary
            onPress={() => {
              updateStatus('scheduled')
              console.log('Cancel')
            }}>
            <Button.Text>Cancel</Button.Text>
          </Button.Secondary>
          <Button.Primary
            onPress={() => {
              updateStatus('finished')
              console.log('Finish')
            }}>
            <Button.Text>Finish</Button.Text>
          </Button.Primary>
        </>
      )}
      {tasks.status === 'scheduled' && (
        <Button.Primary
          onPress={() => {
            updateStatus('started')
          }}>
          <Button.Text>Start</Button.Text>
        </Button.Primary>
      )}
    </FooterView>
  )
}

const enhance = withObservables(['tasks'], ({ tasks }) => {
  return {
    tasks,
  }
})

export default enhance(Footer)
