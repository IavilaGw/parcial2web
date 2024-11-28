import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Clase } from './clase.entity';

@Injectable()
export class ClaseService {
  constructor(
    @InjectRepository(Clase)
    private readonly claseRepository: Repository<Clase>,
  ) {}

  async crearClase(claseData: Partial<Clase>): Promise<Clase> {
    const { codigo } = claseData;

    if (!codigo || codigo.length !== 10) {
      throw new BadRequestException('no tiene 10 caracteres.');
    }

    const nuevaClase = this.claseRepository.create(claseData);
    return this.claseRepository.save(nuevaClase);
  }

  async findClaseById(id: number): Promise<Clase> {
    const clase = await this.claseRepository.findOne({ where: { id } });
    if (!clase) {
      throw new NotFoundException('Clase no esta.');
    }
    return clase;
  }
}
