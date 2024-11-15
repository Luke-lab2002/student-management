import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { ClassDTO } from "./dto/classes.dto";

const prisma = new PrismaClient();

@Injectable()
export class ClassService{
    async getListClassDB(){
        const Class = await prisma.class.findMany();
        return Class;
    }

    async getClassDB(id:number){
        const Class = await prisma.class.findUnique({
            where:{
                id:Number(id)
            }
        });

        return Class;
    }

    async createClassDB(ClassDTO: ClassDTO){
        const Class = await prisma.class.create({
            data:{
                name: ClassDTO.name,
                courseId: ClassDTO.courseId
            }
        });

        return Class;
    }

    async updateClassDB(id:number, ClassDTO:ClassDTO){
        const Class = await prisma.class.update({
            where:{
                id:Number(id)
            },
            data:{
                name: ClassDTO.name,
                courseId: ClassDTO.courseId
            }
        });

        return Class;
    }

    async deleteClassDB(id:number){
        const Class = await prisma.class.delete({
            where:{
                id:Number(id)
            },
        });

        return Class;
    }
}