import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { Bono } from '../bono/bono.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
    @InjectRepository(Bono)
    private readonly bonoRepository: Repository<Bono>,
  ) {}

async crearUsuario(usuarioData: Partial<Usuario>): Promise<Usuario> {
  const { rol, grupoInvestigacion, numeroExtension } = usuarioData;

  if (rol === 'Profesor') {
    if (!['TICSW', 'IMAGINE', 'COMIT'].includes(grupoInvestigacion)) {
      throw new BadRequestException('E.');
    }
  } else if (rol === 'Decana') {
    if (!numeroExtension || numeroExtension.toString().length !== 8) {
      throw new BadRequestException('E');
    }
  }

  const nuevoUsuario = this.usuarioRepository.create(usuarioData);

  return await this.usuarioRepository.save(nuevoUsuario);
}

 async findUsuarioById(id: number): Promise<Usuario> {
    const usuario = await this.usuarioRepository.findOne({ where: { id } });
    if (!usuario) {
      throw new NotFoundException('No encontrado.');
    }
    return usuario;
  }

  async eliminarUsuario(id: number): Promise<void> {
    const usuario = await this.findUsuarioById(id);

    if (usuario.rol === 'Decana') {
      throw new BadRequestException('No se puede eliminar.');
    }

    const bonos = await this.bonoRepository.find({ where: { usuario: { id } } });
    if (bonos.length > 0) {
      throw new BadRequestException('No se puede eliminar un usuario que tiene bono.');
    }

    await this.usuarioRepository.delete(id);
  }

  
}
