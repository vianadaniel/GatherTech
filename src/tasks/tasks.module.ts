import { Module } from '@nestjs/common';

import { TasksUsecasesProxyModule } from './usecases-proxy/tasks-usecases-proxy.module';

import { TasksController } from './presentation/controllers/tasks/tasks.controller';

@Module({
  imports: [TasksUsecasesProxyModule.register()],
  exports: [TasksUsecasesProxyModule.register()],
  controllers: [TasksController],
  providers: [],
})
export class TasksModule {}
