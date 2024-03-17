import TasksModel from '../domain/models/tasks.model';
import { TasksRepository } from '../domain/repository/tasks-repository.interface';
import { GetAllTasksDto } from '../presentation/controllers/dtos/getAll-tasks.dto';

export class GetAllTasksUsecases {
  constructor(private readonly taskRepo: TasksRepository) {}

  async execute(query: GetAllTasksDto): Promise<TasksModel[]> {
    const tasks = await this.taskRepo.getAll(query);

    return tasks;
  }
}
