import TasksModel from '../domain/models/tasks.model';
import { TasksRepository } from '../domain/repository/tasks-repository.interface';
import { CreateTasksDto } from '../presentation/controllers/dtos/create-tasks.dto';

export class CreateTasksUsecases {
  constructor(private readonly taskRepo: TasksRepository) {}

  async execute(data: CreateTasksDto): Promise<TasksModel> {
    const newTask = await this.taskRepo.create(data);

    return newTask;
  }
}
