import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './schemas/users.schema';
import { CreateUsersDto } from './dto/create-users.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getAll(): Promise<Users[]> {
    return this.usersService.findAll();
  }

  @Post()
  createUser(@Body() data: CreateUsersDto): Promise<Users> {
    return this.usersService.create(data);
  }
}
