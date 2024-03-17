import { DynamicModule, Module } from '@nestjs/common';

import UseCaseProxy from '../../common/usecases/usecases-proxy';

import { DatabaseTasksRepository } from '../infrastructure/repository/tasks.repository';

import { TasksRepositoriesModule } from '../infrastructure/repository/repositories.module';
import { GetAllTasksUsecases } from '../usecases/getAll-tasks.usecases';
import { UpdateTasksUsecases } from '../usecases/update-tasks.usecases';
import { GetByIdTasksUsecases } from '../usecases/getById-tasks.usecases';
import { CreateTasksUsecases } from '../usecases/create-tasks.usecases';

@Module({
  imports: [TasksRepositoriesModule],
})
export class TasksUsecasesProxyModule {
  static CREATE_TASKS_USECASES_PROXY = 'CreateTasksUseCasesProxy';
  static UPDATE_TASKS_USECASES_PROXY = 'UpdateTasksUseCasesProxy';
  static GET_ALL_TASKS_USECASES_PROXY = 'GetAllTasksUseCasesProxy';
  static GET_BY_ID_TASKS_USECASES_PROXY = 'GetByIdTasksUseCasesProxy';

  static register(): DynamicModule {
    return {
      module: TasksUsecasesProxyModule,
      providers: [
        {
          inject: [DatabaseTasksRepository],
          provide: TasksUsecasesProxyModule.CREATE_TASKS_USECASES_PROXY,
          useFactory: (taskRepo: DatabaseTasksRepository) =>
            new UseCaseProxy(new CreateTasksUsecases(taskRepo)),
        },
        {
          inject: [DatabaseTasksRepository],
          provide: TasksUsecasesProxyModule.GET_ALL_TASKS_USECASES_PROXY,
          useFactory: (taskRepo: DatabaseTasksRepository) =>
            new UseCaseProxy(new GetAllTasksUsecases(taskRepo)),
        },
        {
          inject: [DatabaseTasksRepository],
          provide: TasksUsecasesProxyModule.UPDATE_TASKS_USECASES_PROXY,
          useFactory: (taskRepo: DatabaseTasksRepository) =>
            new UseCaseProxy(new UpdateTasksUsecases(taskRepo)),
        },
        {
          inject: [DatabaseTasksRepository],
          provide: TasksUsecasesProxyModule.GET_BY_ID_TASKS_USECASES_PROXY,
          useFactory: (taskRepo: DatabaseTasksRepository) =>
            new UseCaseProxy(new GetByIdTasksUsecases(taskRepo)),
        },
      ],
      exports: [
        TasksUsecasesProxyModule.CREATE_TASKS_USECASES_PROXY,
        TasksUsecasesProxyModule.GET_ALL_TASKS_USECASES_PROXY,
        TasksUsecasesProxyModule.UPDATE_TASKS_USECASES_PROXY,
        TasksUsecasesProxyModule.GET_BY_ID_TASKS_USECASES_PROXY,
      ],
    };
  }
}
