import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BootcampsService } from './bootcamps.service';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';

@Controller('bootcamps')
export class BootcampsController {
  constructor(private readonly bootcampsService: BootcampsService) {}

  @Post()
  create(@Body() payload: any ) {
    //payload: sinonimo del body, de la request
    //         Create, Update
    return this.
           bootcampsService.
           create(payload);
  }

  @Get()
  findAll() {
    return this.bootcampsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bootcampsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() payload:any) {
    return {
      id,
      payload
    };
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bootcampsService.remove(+id);
  }
}
