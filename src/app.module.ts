import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { join } from 'path/posix';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Task } from './tasks/entities/task.entity';
import { TasksModule } from './tasks/tasks.module';
@Module({
  imports: [
    TasksModule,
    SequelizeModule.forRoot({
      dialect: 'sqlite',
      host: join(__dirname, 'temp.sqlite'),
      models: [Task],
      autoLoadModels: true
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
