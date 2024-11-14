import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { StudentService } from "./students.service";
import { studentDTO } from "./dto/student.dto";

@Controller('student')
export class StudentController{
    constructor(private readonly studentService:StudentService){
    }

    @Get("/")
    HandleGetListStudents() {
        return this.studentService.getListStudentDB();
    }

    @Post("/create-student")
    HandleCreateStudent(@Body() studentDTO:studentDTO) {
        return this.studentService.createStudentDB(studentDTO);
    }

    @Get("/:id")
    HandleGetStudent(@Param('id') id:number){
        return this.studentService.getStudentDB(id);
    }

    @Put("/:id")
    HandleUpdateStudent(@Param('id') id:number,@Body() studentDTO: studentDTO){
        return this.studentService.updateStudentDB(id, studentDTO)
    }

    @Delete("/:id")
    HandleDeleteStudent(@Param('id') id:number){
        return this.studentService.deleteStudentDB(id);
    }
}