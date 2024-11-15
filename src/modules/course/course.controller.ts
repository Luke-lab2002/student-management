import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { CourseService } from "./course.service";
import { CourseDTO } from "./dto/course.dto";

@Controller("course")
export class CourseController{
    constructor(private readonly CourseService:CourseService){

    }
    
    @Get()
    HandleGetListScore(){
        return this.CourseService.getListCourseDB();
    }

    @Get("/:id")
    HandleGetScore(@Param("id") id:number){
        return this.CourseService.getCourseDB(id);
    }

    @Post("/create-course")
    HandleCreateScore(@Body() CourseDTO:CourseDTO){
        return this.CourseService.createCourseDB(CourseDTO);
    }

    @Put("/:id")
    HandleUpdateScore(@Param("id") id:number,@Body() CourseDTO: CourseDTO){
        return this.CourseService.updateCourseDB(id, CourseDTO);
    }

    @Delete("/:id")
    HandleDeleteScore(@Param("id") id:number){
        return this.CourseService.deleteCourseDB(id);
    }

}