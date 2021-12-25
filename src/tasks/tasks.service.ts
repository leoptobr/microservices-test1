import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Task } from './entities/task.entity';

@Injectable()
export class TasksService {
  
  constructor(
    @InjectModel(Task) private taskModel: typeof Task
  ){}

  create(createTaskDto: CreateTaskDto) {
    return this.taskModel.create(createTaskDto)
  }

  findAll() {
    return this.taskModel.findAll()
  }

  findOne(id: string) {
    return this.taskModel.findByPk(id)
  }

  async update(id: string, updateTaskDto: UpdateTaskDto) {
    const task = await this.taskModel.findByPk(id)
    return task.update(updateTaskDto)
    // return `This action updates a #${id} task`;
  }
  
  async remove(id: string) {
    const task = await this.taskModel.findByPk(id)
    return task.destroy()
  }
}
