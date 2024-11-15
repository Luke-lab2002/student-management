import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ScoreService } from "./score.service";
import { ScoreDTO } from "./dto/score.dto";

@Controller("score")
export class ScoreController{

    constructor(private readonly ScoreService:ScoreService){

    }
    
    @Get()
    HandleGetListScore(){
        return this.ScoreService.getListScoreDB();
    }

    @Get("/:id")
    HandleGetScore(@Param("id") id:number){
        return this.ScoreService.getScoreDB(id);
    }

    @Post("/create-score")
    HandleCreateScore(@Body() ScoreDTO:ScoreDTO){
        return this.ScoreService.createScoreDB(ScoreDTO);
    }

    @Put("/:id")
    HandleUpdateScore(@Param("id") id:number,@Body() ScoreDTO:ScoreDTO){
        return this.ScoreService.updateScoreDB(id, ScoreDTO);
    }

    @Delete("/:id")
    HandleDeleteScore(@Param("id") id:number){
        return this.ScoreService.deleteScoreDB(id);
    }

}