import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";
import { teacherDTO } from "./dto/teacher.dto";
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();
const saltOrRounds = 10;


@Injectable()
export class TeacherService{
    
    async getListTecherDB(){
        const listTeachers = await prisma.teacher.findMany();
        return listTeachers;
    }

    async createTeacherDB(teacherDTO:teacherDTO){
        let hashedpassword = await bcrypt.hash(teacherDTO.password, saltOrRounds);
        const teacher = await prisma.teacher.create({
            data: {
                name:teacherDTO.name,
                password:hashedpassword,
                courseId:teacherDTO.courseId,
                url_img_db:teacherDTO.url_img_db
            },
        });
        return teacher;
    }

    async getTeacherDB(id:number){
        const teacher = await prisma.teacher.findUnique({
            where:{
                id:Number(id)
            }
        });
        return teacher;
    }

    async updateTeacherDB(id:number, teacherDTO:teacherDTO){
        let hashedpassword = await bcrypt.hash(teacherDTO.password, saltOrRounds);
        const teacher = await prisma.teacher.update({
            where: {
                id: Number(id)
            },
            data: {
                name:teacherDTO.name,
                password:hashedpassword,
                courseId:teacherDTO.courseId,
                url_img_db:teacherDTO.url_img_db
            }
        })

        return teacher;
    }

    async deleteTeacherDB(id:number){
        const teacher = await prisma.teacher.delete({
            where:{
                id:Number(id)
            }
        })
        return teacher
    }

    
}