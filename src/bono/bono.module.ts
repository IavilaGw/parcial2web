import { Module } from '@nestjs/common';
import { BonoService} from '../bono/bono.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bono } from './bono.entity';
import { Usuario } from 'src/usuario/usuario.entity';
import { BonoController } from './bono.controller';
import { Clase } from 'src/clase/clase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bono, Usuario,Clase])], 
  providers: [BonoService],
  exports: [BonoService],
  controllers:[BonoController]
})
export class BonoModule {}
