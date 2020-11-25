import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

export default class Tasks extends Model {
  static table = 'tasks'

  @field('title') title: any
  @field('description') description: any
  @field('status') status: any
  @field('due_date_time') dueDateTime: any
  @field('created_at') createdAt: any
  @field('updated_at') updatedAt: any
}
