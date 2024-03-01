import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
// import { ConfigModule } from '@nestjs/config';
// `mongodb://mongodb:27017/nest`
// `mongodb://${process.env.MONGODB_HOST ?? 'localhost:27017'}/nest`
@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://mongodb:27017/nest`,
    ),
    UsersModule,
    // ConfigModule.forRoot({
    //   isGlobal: true,
    // }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
