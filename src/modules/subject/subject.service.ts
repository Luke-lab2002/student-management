import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { SubjectDTO } from "./dto/subject.dto";

const prisma = new PrismaClient();
@Injectable()
export class SubjectService{
    
    async getListSubjectDB(){
        const subjects = await prisma.subject.findMany();
        return subjects;
    }

    async createSubjectDB(SubjectDTO: SubjectDTO){
        const subject = await prisma.subject.create({
            data:{
                name:SubjectDTO.name,
                totaltime:SubjectDTO.totaltime
            }
        })
        return subject;
    }

    async getSubjectDB(id:number){
        const subject = await prisma.subject.findUnique({
            where:{
                id:Number(id)
            }
        });

        return subject;
    }

    async updateSubjectDB(id:number, SubjectDTO:SubjectDTO){
        const subject = await prisma.subject.update({
            where:{
                id:Number(id)
            },
            data:{
                name:SubjectDTO.name,
                totaltime:SubjectDTO.totaltime
            }
        });

        return subject;
    }

    async deleteSubjectDB(id:number){
        const subject = await prisma.subject.delete({
            where:{
                id:Number(id)
            },
        })
        return subject;
    }
}