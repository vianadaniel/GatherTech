import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

import { configDotenv } from 'dotenv';
configDotenv.apply(process.env)

console.log(process.env.MONGODB_HOST ?? 'localhost:27017', "---------MONGODB_HOST------------")

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${process.env.MONGODB_HOST ?? 'localhost:27017'}/nest`,
    ),
    UsersModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
