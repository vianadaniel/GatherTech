import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './schemas/users.schema';
import { CreateUsersDto } from './dto/create-users.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users.name) private usersModel: Model<Users>) {}

  async create(createUsersData: CreateUsersDto): Promise<Users> {
    const createdUsers = new this.usersModel(createUsersData);
    return createdUsers.save();
  }

  async findAll(): Promise<Users[]> {
    return this.usersModel.find().exec();
  }
}
