import { Model } from '@nozbe/watermelondb'
import { field } from '@nozbe/watermelondb/decorators'

export default class User extends Model {
  static table = 'user'

  @field('is_admin') isAdmin: any
  @field('name') name: any
  @field('last_name') status: any
  @field('created_at') createdAt: any
  @field('updated_at') updatedAt: any
}
