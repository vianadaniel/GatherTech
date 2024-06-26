import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';

import { configDotenv } from 'dotenv';
import { TasksModule } from './tasks/tasks.module';
configDotenv.apply(process.env);

console.log(
  process.env.MONGODB_HOST ?? 'localhost:27017',
  '---------MONGODB_HOST------------',
);

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGODB_HOST ?? 'localhost:27017'}/nest`,
    ),
    UsersModule,
    TasksModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
})
export class AppModule {}
