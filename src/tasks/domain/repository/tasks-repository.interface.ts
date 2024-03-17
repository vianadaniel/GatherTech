import { GetAllTasksDto } from '../../presentation/controllers/dtos/getAll-tasks.dto';
import TasksModel from '../models/tasks.model';

export interface TasksRepository {
  getAll(options: GetAllTasksDto): Promise<TasksModel[]>;
  create(data): Promise<TasksModel>;
  update(id, data): Promise<TasksModel | null>;
  getById(id): Promise<TasksModel | null>;
}

export interface GetAllOptions {
  status?: string;
}
