import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ClaseService } from './clase.service';
import { ClaseDto } from './clase.dto';
import { Clase } from './clase.entity';
import { plainToInstance } from 'class-transformer';
import { ParseIntPipe } from '@nestjs/common';

@Controller('clases')
export class ClaseController {
  constructor(private readonly claseService: ClaseService) {}

  @Post()
  async create(@Body() claseDto: ClaseDto): Promise<Clase> {
    const clase = plainToInstance(Clase, claseDto);
    return await this.claseService.crearClase(clase);
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Clase> {
    return await this.claseService.findClaseById(id);
  }
}
