import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { ScoreDTO } from "./dto/score.dto";

const prisma = new PrismaClient();

@Injectable()
export class ScoreService{
    
    async getListScoreDB(){
        const scores = await prisma.score.findMany()
        return scores;
    }

    async getScoreDB(id:number){
        const score = await prisma.score.findUnique({
            where:{
                id:Number(id)
            }
        });

        return score;
    }

    async createScoreDB(ScoreDTO:ScoreDTO){
        const score = await prisma.score.create({
            data:{
                score:ScoreDTO.score,
                studentId:ScoreDTO.studentId,
                subjectId:ScoreDTO.subjectId
            }
        });

        return score;
    }

    async updateScoreDB(id:number, ScoreDTO:ScoreDTO){
        const score = await prisma.score.update({
            where:{
                id:Number(id)
            },
            data:{
                score:ScoreDTO.score,
                studentId:ScoreDTO.studentId,
                subjectId:ScoreDTO.subjectId
            }
        });

        return score;
    }

    async deleteScoreDB(id:number){
        const score = await prisma.score.delete({
            where:{
                id:Number(id)
            },
        });

        return score;
    }
}