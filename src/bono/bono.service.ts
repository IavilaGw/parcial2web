import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bono } from './bono.entity';
import { Usuario } from '../usuario/usuario.entity';

@Injectable()
export class BonoService {
  constructor(
    @InjectRepository(Bono)
    private readonly bonoRepository: Repository<Bono>,
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  async crearBono(bonoData: Partial<Bono>, userId: number): Promise<Bono> {
    const { monto } = bonoData;

    if (!monto) {
      throw new BadRequestException('monto vacio');
    }

    if( monto <= 0){
        throw new BadRequestException("monto negativo")
    }

    const usuario = await this.usuarioRepository.findOne({ where: { id: userId } });
    if (usuario.rol !== 'Profesor') {
      throw new BadRequestException('no es clase profesor');
    }

    const nuevoBono = this.bonoRepository.create({ ...bonoData, usuario });
    return this.bonoRepository.save(nuevoBono);
  }

  async findBonoByCodigo(codigo: string): Promise<Bono> {
    const bono = await this.bonoRepository.findOne({ where: { palabraClave: codigo } });
    if (!bono) {
      throw new NotFoundException('E');
    }
    return bono;
  }

  async findAllBonosByUsuario(userId: number): Promise<Bono[]> {
    return this.bonoRepository.find({ where: { usuario: { id: userId } } });
  }

  async deleteBono(id: number): Promise<void> {
    const bono = await this.bonoRepository.findOne({ where: { id } });

    if (!bono) {
      throw new NotFoundException('Bono no encontrado.');
    }

    if (bono.calificacion > 4) {
      throw new BadRequestException('Bono mayor a 4.');
    }

    await this.bonoRepository.delete(id);
  }
}
