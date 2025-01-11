import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { Student } from './student/entities/student.entity';
import { StudentController } from './student/student.controller';

@Module({
  imports: [    
      TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'studentdb',
      entities: [Student],
      synchronize: true,
    }),
      StudentModule,
  ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
