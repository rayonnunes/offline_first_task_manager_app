import { appSchema, tableSchema } from '@nozbe/watermelondb'

const mySchema = appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'user',
      columns: [
        { name: 'is_admin', type: 'boolean' },
        { name: 'name', type: 'string' },
        { name: 'last_name', type: 'string' },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'tasks',
      columns: [
        { name: 'title', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'status', type: 'string' },
        { name: 'due_date_time', type: 'number' },
        { name: 'user_id', type: 'string', isIndexed: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'checkIn',
      columns: [
        { name: 'status', type: 'string' },
        { name: 'started_at', type: 'number', isOptional: true },
        { name: 'user_id', type: 'string', isIndexed: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'checkOut',
      columns: [
        { name: 'status', type: 'string' },
        { name: 'started_at', type: 'number', isOptional: true },
        { name: 'user_id', type: 'string', isIndexed: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
    tableSchema({
      name: 'reports',
      columns: [
        { name: 'content', type: 'string' },
        { name: 'task_id', type: 'string', isIndexed: true },
        { name: 'created_at', type: 'number' },
        { name: 'updated_at', type: 'number' },
      ],
    }),
  ],
})
export default mySchema
