import { Injectable } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Bootcamp } from './entities/bootcamp.entity';


@Injectable()
export class BootcampsService {


  //Inyectar: obtener una instancia del 
  //Repositorio como atributo de 
  //la clase BootcampsService: sin
  //necesidad de instanciar 
  constructor(@InjectRepository(Bootcamp) 
        private bootcampRepository:
                Repository<Bootcamp> ){
        }
  create(payload: any) {
    //1. crear una instancia de una entity bootcamp
    const newBootcamp = this.
                        bootcampRepository.
                        create (payload)
    //2.grabar esa instancia y retornarla
    return this.
          bootcampRepository.
          save(newBootcamp);      
    ;
  }

  findAll() {
    return this.bootcampRepository.find()
  }

  findOne(id: number) {
    return this.bootcampRepository.findOneBy({id})
  }

  update(id: number, updateBootcampDto: UpdateBootcampDto) {
    return `This action updates a #${id} bootcamp`;
  }

  remove(id: number) {
    return `This action removes a #${id} bootcamp`;
  }
}
