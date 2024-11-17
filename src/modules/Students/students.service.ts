import { Injectable } from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";
import { studentDTO } from "./dto/student.dto";

const prisma = new PrismaClient();

@Injectable()
export class StudentService{
    async getListStudentDB(){
        const students = await prisma.student.findMany({
            include:{
                class:true
            }
        })
        return students;
    }

    async createStudentDB(studentDTO:studentDTO){
        const student = await prisma.student.create({
            data: {
              name: studentDTO.name,
              phone: studentDTO.phone,
              email: studentDTO.email,
              address: studentDTO.address,
              Dob: new Date(studentDTO.Dob),
              Gender: studentDTO.Gender, 
              classId: studentDTO.classId, 
            },
          });
        
        return student;
    }

    async getStudentDB(id:number){
        const student = await prisma.student.findUnique({
            where:{
                id: Number(id)
            },
            include: {
                class:true,
            }
        });

        return student;
    }

    async updateStudentDB(id:number, studentDTO:studentDTO){
        const updateStudent = await prisma.student.update({
            where: {
              id:Number(id)
            },
            data: {
                name: studentDTO.name,
                phone: studentDTO.phone,
                email: studentDTO.email,
                address: studentDTO.address,
                Dob: new Date(studentDTO.Dob),
                Gender: studentDTO.Gender, 
                classId: studentDTO.classId, 
            },
        })
        return updateStudent
    }

    async deleteStudentDB(id:number){
        const deleteStudent = await prisma.student.delete({
            where: {
              id: Number(id),
            },
          })

        return deleteStudent
    }
}