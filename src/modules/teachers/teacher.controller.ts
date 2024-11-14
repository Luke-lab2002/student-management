import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TeacherService } from "./teacher.service";
import { teacherDTO } from "./dto/teacher.dto";

@Controller("teacher")
export class TeacherController{
    constructor(private readonly teacherService:TeacherService){

    }
    
    @Get("/")
    HandleGetListTeacher(){
        return this.teacherService.getListTecherDB();
    }

    @Post("/create-teacher")
    HandleCreateTeacher(@Body() teacherDTO:teacherDTO){
        return this.teacherService.createTeacherDB(teacherDTO);
    }

    @Get("/:id")
    HandleGetTeacher(@Param("id") id:number){
        return this.teacherService.getTeacherDB(id);
    }
}