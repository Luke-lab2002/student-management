import { Injectable } from "@nestjs/common";
import { PrismaClient } from "@prisma/client";
import { CourseDTO } from "./dto/course.dto";


const prisma = new PrismaClient();

@Injectable()
export class CourseService{
    async getListCourseDB(){
        const scores = await prisma.course.findMany()
        return scores;
    }

    async getCourseDB(id:number){
        const score = await prisma.course.findUnique({
            where:{
                id:Number(id)
            }
        });

        return score;
    }

    async createCourseDB(CourseDTO: CourseDTO){
        const course = await prisma.course.create({
            data:{
                name: CourseDTO.name,
                dateStart: new Date(CourseDTO.dateStart),
                dateEnd: new Date(CourseDTO.dateEnd)
            }
        });

        return course;
    }

    async updateCourseDB(id:number, CourseDTO:CourseDTO){
        const score = await prisma.course.update({
            where:{
                id:Number(id)
            },
            data:{
                name: CourseDTO.name,
                dateStart: new Date(CourseDTO.dateStart),
                dateEnd: new Date(CourseDTO.dateEnd)
            }
        });

        return score;
    }

    async deleteCourseDB(id:number){
        const score = await prisma.course.delete({
            where:{
                id:Number(id)
            },
        });

        return score;
    }
}