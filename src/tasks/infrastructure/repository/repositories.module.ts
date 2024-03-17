import { Module } from '@nestjs/common';

import { TasksSchema, Tasks } from '../schemas/tasks.schema';
import { DatabaseTasksRepository } from './tasks.repository';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tasks.name, schema: TasksSchema }]),
  ],
  providers: [DatabaseTasksRepository],
  exports: [DatabaseTasksRepository],
})
export class TasksRepositoriesModule {}
