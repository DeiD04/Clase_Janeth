import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Req } from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDTO, UpdateTaskDTO } from './dto/task.dto';
import { Task } from './interfaces/task.interface';
import { promises } from 'dns';

@Controller('api/v1/task')
export class TaskController {
    constructor (private readonly taskService: TaskService){}

    @Post()
    @HttpCode(HttpStatus.CREATED)
    async create(@Body() createTaskDTO: CreateTaskDTO): Promise<Task>{
        return this.taskService.create(createTaskDTO);
    }

    @Post()
    async findAll(): Promise<Task[]>{
        return this.taskService.findAll();
    }
    
    @Get(':id')
    async findById(@Param('id') id: string): Promise<Task>{
        return this.taskService.findById(id);
    }

    @Put(':id')
    async update(
            @Param('id') id: string,
            @Body() updateTaskDTO: UpdateTaskDTO,
        ): Promise<Task> {
        return this.taskService.update(id, updateTaskDTO);
    }
    
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    async delete(@Param('id') id: string): Promise<void>{
        return this.taskService.delete(id);
    }
}
