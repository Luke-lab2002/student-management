import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { SubjectService } from "./subject.service";
import { SubjectDTO } from "./dto/subject.dto";

@Controller("subject")
export class SubjectController{
    constructor(private readonly subjectService:SubjectService){

    }

    @Get("/")
    HandleGetListSubjects(){
        return this.subjectService.getListSubjectDB();
    }

    @Post("/create-subject")
    HandleCreateSubject(@Body() subjectDTO:SubjectDTO){
        return this.subjectService.createSubjectDB(subjectDTO);
    }

    @Get("/:id")
    HandleGetSubject(@Param("id") id:number){
        return this.subjectService.getSubjectDB(id);
    }

    @Put("/:id")
    HandleUpdateSubject(@Param("id") id:number, @Body() SubjectDTO:SubjectDTO){
        return this.subjectService.updateSubjectDB(id, SubjectDTO);
    }

    @Delete("/:id")
    HandleDeleteSubject(@Param("id") id:number){
        return this.subjectService.deleteSubjectDB(id);
    }
}