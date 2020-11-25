import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

export default class CheckOut extends Model {
  static table = 'checkOut'

  @field('status') status: any
  @field('started_at') startedAt: any
  @field('created_at') createdAt: any
  @field('updated_at') updatedAt: any
}
