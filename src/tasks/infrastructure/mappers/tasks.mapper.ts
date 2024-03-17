import TasksModel from '../../domain/models/tasks.model';
import { Tasks } from '../schemas/tasks.schema';

export class TasksMapper {
  static toDomain(task: Tasks): TasksModel {
    return {
      _id: task._id,
      status: task.status,
      description: task.description,
      user_id: task.user_id,
    };
  }

  static toDomainList(tasks: Tasks[]): TasksModel[] {
    return tasks.map((task) => this.toDomain(task));
  }
}
