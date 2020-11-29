import { Model } from '@nozbe/watermelondb'
import { action, children, field } from '@nozbe/watermelondb/decorators'

export default class User extends Model {
  static table = 'user'

  @field('is_admin') isAdmin: any
  @field('name') name: any
  @field('last_name') lastName: any
  @field('created_at') createdAt: any
  @field('updated_at') updatedAt: any

  @children('tasks') tasks: any

  @action async addUser({
    isAdmin,
    name,
    lastName,
  }: {
    isAdmin: boolean
    name: string
    lastName: string
  }) {
    await this.collections.get('user').create((user: any) => {
      user.isAdmin = isAdmin
      user.name = name
      user.lastName = lastName
    })
  }

  @action async addTask(newTask) {
    console.log(newTask)

    await this.collections.get('tasks').create((task: any) => {
      task.user.set(this)
      task.title = newTask.title
      task.description = newTask.description
      task.status = newTask.status
      task.due_date_time = newTask.due_date_time
    })
  }
}
