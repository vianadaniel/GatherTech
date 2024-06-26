import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTasksDto {
  @IsString()
  @IsNotEmpty()
  status: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  user_id?: string;
}
