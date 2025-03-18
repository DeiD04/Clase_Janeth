import { Injectable, NotFoundException } from '@nestjs/common';
import { ITaskService, Task } from './interfaces/task.interface';
import { CreateTaskDTO, UpdateTaskDTO } from './dto/task.dto';
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class TaskService implements ITaskService{

    private readonly Tasks: Task[] = [];

    async findAll(): Promise<Task[]> {
        return this.Tasks;
    }

    async findById(id: string): Promise<Task> {
        const task = this.Tasks.find((task) => task.id === id);
        if(!task){
            throw new NotFoundException(`Task with ID ${id} not found`);
        }

        return task;
    }

    async create(createTaskDTO: CreateTaskDTO): Promise<Task> {
        const newTask: Task = {
            id: uuidv4(),
            ...createTaskDTO,
            createAt: new Date(),
        };
        
        this.Tasks.push(newTask);
        return newTask;
    }

    async update(id: string, updateTaskDTO: UpdateTaskDTO): Promise<Task> {
        const taskIndex = this.Tasks.findIndex((task) => task.id === id);
        if (taskIndex === -1) {
            throw new NotFoundException(`Task with ID ${id} not found`);
        }

        const updatedTask ={
            ...this.Tasks[taskIndex],
            ...updateTaskDTO,
        };
        this.Tasks[taskIndex] = updatedTask;
        return updatedTask;
    }

    async delete(id: string): Promise<void> {
        
    }
}
