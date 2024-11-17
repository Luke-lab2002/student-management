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
            },
            include:{
                student:true,
                Subject:true
            }
            
        });

        return score;
    }

    async createScoreDB(ScoreDTO:ScoreDTO){
        const score = await prisma.score.create({
            data:{
                score:Number(ScoreDTO.score),
                studentId:Number(ScoreDTO.studentId),
                subjectId:Number(ScoreDTO.subjectId)
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
                score:Number(ScoreDTO.score),
                studentId:Number(ScoreDTO.studentId),
                subjectId:Number(ScoreDTO.subjectId)
            },
            include:{
                student:true,
                Subject:true
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