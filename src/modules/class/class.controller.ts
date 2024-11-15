import { Controller, Get, Post, Put, Delete, Param, Body } from "@nestjs/common";
import { ClassService } from "./class.service";
import { ClassDTO } from "./dto/classes.dto";

@Controller("class")
export class ClassController{
    constructor(private readonly classService:ClassService){

    }
    
    @Get()
    HandleGetListClass(){
        return this.classService.getListClassDB();
    }

    @Get("/:id")
    HandleGetClass(@Param("id") id:number){
        return this.classService.getClassDB(id);
    }

    @Post("/create-class")
    HandleCreateClass(@Body() classDTO:ClassDTO){
        return this.classService.createClassDB(classDTO);
    }

    @Put("/:id")
    HandleUpdateClass(@Param("id") id:number,@Body() classDTO: ClassDTO){
        return this.classService.updateClassDB(id, classDTO);
    }

    @Delete("/:id")
    HandleDeleteClass(@Param("id") id:number){
        return this.classService.deleteClassDB(id);
    }

}