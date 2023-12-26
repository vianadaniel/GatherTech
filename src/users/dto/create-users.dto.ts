import { IsString } from 'class-validator';

export class CreateUsersDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;
}
