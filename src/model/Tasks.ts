import { Model } from '@nozbe/watermelondb'
import {
  action,
  children,
  field,
  relation,
} from '@nozbe/watermelondb/decorators'
import { TasksResponseProps } from '../store/modules/tasks/types'

export default class Tasks extends Model {
  static table = 'tasks'

  static associations = {
    user: { type: 'belongs_to', key: 'user_id' },
    reports: { type: 'has_one', foreignKey: 'task_id' },
  }

  @field('title') title: any
  @field('description') description: any
  @field('status') status: any
  @field('due_date_time') dueDateTime: any
  @field('created_at') createdAt: any
  @field('updated_at') updatedAt: any
  @relation('user', 'user_id') user: any
  @children('reports') reports: any

  @action async updateStatus(newStatus: TasksResponseProps['status']) {
    return this.update((task) => {
      task.status = newStatus
    })
  }

  @action async addReport(newReport: any) {
    return this.collections.get('reports').create((report: any) => {
      report.tasks.set(this)
      report.content = newReport.title
    })
  }
}
