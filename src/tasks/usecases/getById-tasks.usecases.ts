import TasksModel from '../domain/models/tasks.model';
import { TasksRepository } from '../domain/repository/tasks-repository.interface';

export class GetByIdTasksUsecases {
  constructor(private readonly taskRepo: TasksRepository) {}

  async execute(id: string): Promise<TasksModel | null> {
    const task = await this.taskRepo.getById(id);

    return task;
  }
}
