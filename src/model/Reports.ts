import { Model } from '@nozbe/watermelondb'
import { field, relation } from '@nozbe/watermelondb/decorators'

export default class Reports extends Model {
  static table = 'reports'

  static associations = {
    tasks: { type: 'belongs_to', key: 'task_id' },
  }

  @field('content') description: any
  @field('created_at') createdAt: any
  @field('updated_at') updatedAt: any
  @relation('tasks', 'task_id') taskId: any
}
