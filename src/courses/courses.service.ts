import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './entities/course.entity';



@Injectable()
export class CoursesService {
  Repository: any;
  
  //Inyectar: obtener una instancia del 
  //Repositorio como atributo de 
  //la clase BootcampsService: sin
  //necesidad de instanciar 
  constructor(@InjectRepository(Course) 
         private cursoRepository:
         Repository<Course>){

         }
  create(payload:any) {
    const newCurso=this.
                   cursoRepository.
                   create(payload)
    return this.
           cursoRepository.
           save(newCurso)
  }

  findAll() {
    return this.cursoRepository.find()
  }

  findOne(id: number) {
    return this.Repository.findOneBy({id})
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This actioncurso updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
