import { Module } from '@nestjs/common';
import { ClaseService } from './clase.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clase } from './clase.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Clase])],
  providers: [ClaseService],
  exports: [ClaseService],                              
})
export class ClaseModule {}
