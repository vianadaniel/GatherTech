import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
// import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

import { GetAllTasksUsecases } from '../../../usecases/getAll-tasks.usecases';
import { Tasks } from '../../../infrastructure/schemas/tasks.schema';
import { GetAllTasksDto } from '../dtos/getAll-tasks.dto';
import { CreateTasksDto } from '../dtos/create-tasks.dto';
import { TasksUsecasesProxyModule } from '../../../usecases-proxy/tasks-usecases-proxy.module';
import { CreateTasksUsecases } from '../../../usecases/create-tasks.usecases';
import { UpdateTasksDto } from '../dtos/update-tasks.dto';
import { UpdateTasksUsecases } from '../../../usecases/update-tasks.usecases';
import { GetByIdTasksUsecases } from '../../../usecases/getById-tasks.usecases';
import UseCaseProxy from '../../../../common/usecases/usecases-proxy';
import TasksModel from '../../../domain/models/tasks.model';

@Controller('tasks')
// @ApiTags('tasks')
// @ApiResponse({ status: 500, description: 'Internal error' })
export class TasksController {
  constructor(
    @Inject(TasksUsecasesProxyModule.GET_ALL_TASKS_USECASES_PROXY)
    private readonly getAllUsecasesProxy: UseCaseProxy<GetAllTasksUsecases>,

    @Inject(TasksUsecasesProxyModule.UPDATE_TASKS_USECASES_PROXY)
    private readonly updateUsecasesProxy: UseCaseProxy<UpdateTasksUsecases>,

    @Inject(TasksUsecasesProxyModule.CREATE_TASKS_USECASES_PROXY)
    private readonly createUsecasesProxy: UseCaseProxy<CreateTasksUsecases>,

    @Inject(TasksUsecasesProxyModule.GET_BY_ID_TASKS_USECASES_PROXY)
    private readonly getByIdUsecasesProxy: UseCaseProxy<GetByIdTasksUsecases>,
  ) {}

  @Get()
  // @ApiOperation({ description: 'List all tasks' })
  // @ApiQuery({ type: GetAllTasksDto })
  // @ApiResponse({
  //   status: 200,
  //   description: 'Successful operation',
  //   type: Task,
  //   isArray: true,
  // })
  async getAll(@Query() query: GetAllTasksDto): Promise<TasksModel[]> {
    const tasks = await this.getAllUsecasesProxy.getInstance().execute(query);
    return tasks;
  }

  @Get('/:id')
  // @ApiOperation({ description: 'Get task by ID' })
  // @ApiResponse({ status: 200, description: 'Successful operation', type: Task })
  async getById(
    @Param('id', ParseIntPipe) id: string,
  ): Promise<TasksModel | null> {
    const task = await this.getByIdUsecasesProxy.getInstance().execute(id);
    return task;
  }

  @Post()
  // @ApiOperation({ summary: 'Create a new task' })
  // @ApiResponse({ status: 201, description: 'Task created', type: Task })
  async create(@Body() createTaskDto: CreateTasksDto): Promise<TasksModel> {
    const task = await this.createUsecasesProxy
      .getInstance()
      .execute(createTaskDto);
    return task;
  }

  @Put('/:id')
  // @ApiOperation({ summary: 'Update a task' })
  // @ApiResponse({ status: 200, description: 'Task updated', type: Task })
  async update(
    @Param('id', ParseIntPipe) id: string,
    @Body() updateTaskDto: UpdateTasksDto,
  ): Promise<TasksModel | null> {
    const task = await this.updateUsecasesProxy
      .getInstance()
      .execute(id, updateTaskDto);
    return task;
  }
}
