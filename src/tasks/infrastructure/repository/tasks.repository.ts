import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tasks } from '../schemas/tasks.schema';
import { CreateTasksDto } from '../../presentation/controllers/dtos/create-tasks.dto';
import { UpdateTasksDto } from '../../presentation/controllers/dtos/update-tasks.dto';
import { TasksRepository } from '../../domain/repository/tasks-repository.interface';
import { GetAllTasksDto } from '../../presentation/controllers/dtos/getAll-tasks.dto';

@Injectable()
export class DatabaseTasksRepository implements TasksRepository {
  constructor(
    @InjectModel(Tasks.name) private readonly tasksModel: Model<Tasks>,
  ) {}

  async getAll(options: GetAllTasksDto): Promise<Tasks[]> {
    return this.tasksModel.find().exec();
  }

  async create(data: CreateTasksDto): Promise<Tasks> {
    const createdTask = await this.tasksModel.create(data);

    return createdTask;
  }

  async update(id: string, data: UpdateTasksDto): Promise<Tasks | null> {
    const updatedTask = await this.tasksModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();

    return updatedTask;
  }

  async getById(id: string): Promise<Tasks | null> {
    const task = await this.tasksModel.findById(id).exec();

    return task;
  }

  async delete(id: string): Promise<void> {
    await this.tasksModel.findByIdAndDelete(id).exec();
  }
}
