import { CreateStudentDto } from './dto/create-student.dto';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
export declare class CreateStudentService {
    private readonly studentRepository;
    constructor(studentRepository: Repository<Student>);
    create(createStudentDto: CreateStudentDto): Promise<CreateStudentDto & Student>;
}
