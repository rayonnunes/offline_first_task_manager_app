import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

export default class CheckIn extends Model {
  static table = 'checkIn'

  @field('status') status: any
  @field('started_at') startedAt: any
  @field('created_at') createdAt: any
  @field('updated_at') updatedAt: any
}
