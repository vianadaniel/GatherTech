import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateTasksDto {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  status?: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  description?: string;
}
