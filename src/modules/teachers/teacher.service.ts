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
                age:Number(teacherDTO.age),
                email:teacherDTO.email,
                address:teacherDTO.address,
                password:hashedpassword,
                courseId:teacherDTO.courseId,
                url_img_db:teacherDTO.url_img_db
            },
        });
        return teacher;
    }

    async getTeacherEmailDB(email:string){
        const teacher = await prisma.teacher.findUnique({
            where:{
                email:email
            }
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
        const currentTeacher = await prisma.teacher.findUnique({
            where: {
                id: Number(id)
            }
        });
    
        if (!currentTeacher) {
            throw new Error('Teacher not found');
        }
    
        // Nếu mật khẩu được truyền thì băm mật khẩu mới, nếu không thì giữ nguyên mật khẩu cũ
        let hashedpassword = currentTeacher.password;  // Giữ nguyên mật khẩu cũ nếu không có mật khẩu mới
        if (teacherDTO.password) {
            hashedpassword = await bcrypt.hash(teacherDTO.password, saltOrRounds);  // Băm mật khẩu mới
        }
    
        // Cập nhật thông tin giáo viên, nhưng chỉ cập nhật các trường có giá trị khác null
        const updatedTeacher = await prisma.teacher.update({
            where: {
                id: Number(id)
            },
            data: {
                name: teacherDTO.name ?? currentTeacher.name,  // Nếu name là null thì giữ nguyên tên cũ
                age: Number(teacherDTO.age ?? currentTeacher.age),  // Nếu age là null thì giữ nguyên tuổi cũ
                address: teacherDTO.address ?? currentTeacher.address,  // Nếu address là null thì giữ nguyên địa chỉ cũ
                password: hashedpassword,  // Đảm bảo mật khẩu luôn được cập nhật nếu có thay đổi
                courseId: teacherDTO.courseId ?? currentTeacher.courseId,  // Nếu courseId là null thì giữ nguyên khóa học cũ
                url_img_db: teacherDTO.url_img_db ?? currentTeacher.url_img_db  // Nếu url_img_db là null thì giữ nguyên ảnh cũ
            }
        });
    
        return updatedTeacher;
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