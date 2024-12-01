import { Body, Controller, Delete, Get, HttpCode, Param, Post, UseInterceptors } from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { BonoDto } from '../bono/bono.dto';
import { Bono } from '../bono/bono.entity';
import { BonoService } from './bono.service';

@Controller('bonos')
export class BonoController {
  constructor(private readonly bonoService: BonoService) {}

  @Get()
  async findAll() {
    const userId = 1;
    return await this.bonoService.findAllBonosByUsuario(userId);
  }

  @Get('codigo/:codigo')
  async findBonoByCodigo(@Param('codigo') codigo: string): Promise<Bono> {
    return this.bonoService.findBonoByCodigo(codigo);
  }


  @Get(':bonoId')
  async findOne(@Param('bonoId') bonoId: string) {
    return await this.bonoService.findBonoByCodigo(bonoId);
  }

   @Post()
  async create(@Body() bonoDto: BonoDto) {
    const bono: Bono = plainToInstance(Bono, bonoDto);

    const userId = 1;

    const { claseId } = bonoDto;

    return await this.bonoService.crearBono(bono, userId, claseId);
  }

  @Delete(':bonoId')
  @HttpCode(204)
  async delete(@Param('bonoId') bonoId: string) {
    const bonoIdNum = parseInt(bonoId, 10);
    return await this.bonoService.deleteBono(bonoIdNum);
  }
}
