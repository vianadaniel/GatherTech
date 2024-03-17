import TasksModel from '../domain/models/tasks.model';
import { TasksRepository } from '../domain/repository/tasks-repository.interface';
import { UpdateTasksDto } from '../presentation/controllers/dtos/update-tasks.dto';

export class UpdateTasksUsecases {
  constructor(private readonly taskRepo: TasksRepository) {}

  async execute(id: string, data: UpdateTasksDto): Promise<TasksModel | null> {
    const updatedTask = await this.taskRepo.update(id, data);

    return updatedTask;
  }
}
