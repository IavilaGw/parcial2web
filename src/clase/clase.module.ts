import { Module } from '@nestjs/common';
import { ClaseService } from './clase.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clase } from './clase.entity';
import { ClaseController } from './clase.controller';

@Module({
  imports:[TypeOrmModule.forFeature([Clase])],
  providers: [ClaseService],
  exports: [ClaseService],
  controllers: [ClaseController],                              
})
export class ClaseModule {}
