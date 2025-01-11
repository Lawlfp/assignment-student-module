import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(createStudentDto: CreateStudentDto): Promise<CreateStudentDto & import("./entities/student.entity").Student>;
    findAll(): Promise<import("./entities/student.entity").Student[]>;
    findOne(id: string): Promise<import("./entities/student.entity").Student>;
    update(id: string, updateStudentDto: UpdateStudentDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("./entities/student.entity").Student>;
}
