import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskController } from './task/task.controller';
import { TaskService } from './task/task.service';
import { TaskModule } from './task/task.module';
import { v4 as uuidv4 } from 'uuid'

@Module({
  imports: [TaskModule],
  controllers: [AppController, TaskController],
  providers: [AppService, TaskService],
})

export class AppModule {}
