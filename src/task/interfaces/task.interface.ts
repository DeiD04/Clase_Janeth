import { CreateTaskDTO, UpdateTaskDTO } from "../dto/task.dto";

export interface Task{
    id: string;
    description:string;
    isDone:boolean;
    createAt: Date;
}

export interface ITaskService{
    findAll(): Promise<Task[]>;
    findById(id: string): Promise<Task>;
    create(createTaskDTO: CreateTaskDTO): Promise<Task>;
    update(id: string, updateTaskDTO: UpdateTaskDTO): Promise<Task>;
    delete(id: string): Promise<void>;
}