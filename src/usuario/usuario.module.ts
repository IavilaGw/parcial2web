import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { UsuarioService } from './usuario.service';
import { Bono } from 'src/bono/bono.entity';
import { UsuarioController } from './usuario.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]),TypeOrmModule.forFeature([Bono])], 
  providers: [UsuarioService],                   
  exports: [UsuarioService], controllers: [UsuarioController],                    
})
export class UsuarioModule {}
