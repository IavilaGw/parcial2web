import { Module } from '@nestjs/common';
import { BonoService} from '../bono/bono.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bono } from './bono.entity';
import { Usuario } from 'src/usuario/usuario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bono, Usuario])], 
  providers: [BonoService],
  exports: [BonoService],
})
export class BonoModule {}
