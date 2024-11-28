// import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseInterceptors } from '@nestjs/common';
// import { plainToInstance } from 'class-transformer';
// //import { BusinessErrorsInterceptor } from '../shared/interceptors/business-errors.interceptor';
// import { BonoDto } from '../bono/bono.dto';
// //import { BonoEntity } from '../bono/bono.entity';
// import { BonoService } from './bono.service';

// @Controller('bonos')
// //@UseInterceptors(BusinessErrorsInterceptor)
// export class BonoController {
//   constructor(private readonly bonoService: BonoService) {}

//   @Get()
//   async findAll() {
//     const userId = 1;
//     return await this.bonoService.findAllBonosByUsuario(userId);
//   }

//   @Get(':bonoId')
//   async findOne(@Param('bonoId') bonoId: string) {
//     return await this.bonoService.findBonoByCodigo(bonoId);
//   }

//   @Post()
//   async create(@Body() bonoDto: BonoDto) {
//     const bono: BonoEntity = plainToInstance(BonoEntity, bonoDto);
//     const userId = 1;
//     return await this.bonoService.crearBono(bono, userId);
//   }


//   @Delete(':bonoId')
//   @HttpCode(204)
//   async delete(@Param('bonoId') bonoId: string) {
//     const bonoIdNum = parseInt(bonoId, 10);
//     return await this.bonoService.deleteBono(bonoIdNum);
//   }
// }
