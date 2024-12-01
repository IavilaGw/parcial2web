import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bono } from './bono.entity';
import { Usuario } from '../usuario/usuario.entity';
import { Clase } from '../clase/clase.entity'; // Corrige el path según tu estructura

@Injectable()
export class BonoService {
  constructor(
    @InjectRepository(Clase)
    private readonly claseRepository: Repository<Clase>,

    @InjectRepository(Bono)
    private readonly bonoRepository: Repository<Bono>,

    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>,
  ) {}

  /**
   * Crear un nuevo bono asociado a un usuario.
   */
 async crearBono(bonoData: Partial<Bono>, userId: number, claseId: number): Promise<Bono> {
  const { monto } = bonoData;

  // Validaciones del monto
  if (!monto) {
    throw new BadRequestException('Monto vacío');
  }

  if (monto <= 0) {
    throw new BadRequestException('El monto no puede ser negativo o cero');
  }

  // Buscar al usuario
  const usuario = await this.usuarioRepository.findOne({ where: { id: userId } });

  if (!usuario || usuario.rol !== 'Profesor') {
    throw new BadRequestException('El usuario no es de tipo Profesor');
  }

  // Buscar la clase por id
  const clase = await this.claseRepository.findOne({ where: { id: claseId } });

  if (!clase) {
    throw new BadRequestException('Clase no encontrada');
  }

  // Crear el bono y asociar la clase y el usuario
  const nuevoBono = this.bonoRepository.create({
    ...bonoData,
    usuario,
    clase, // Aquí asociamos la clase al bono
  });

  // Guardar el bono
  return this.bonoRepository.save(nuevoBono);
}


async findBonoByCodigo(codigo: string): Promise<Bono> {
  const clase = await this.claseRepository.findOne({ where: { codigo } });

  if (!clase) {
      throw new NotFoundException('Error: Clase no encontrada para el código proporcionado');
  }

  const bono = await this.bonoRepository.findOne({ where: { clase } });

  if (!bono) {
      throw new NotFoundException('Error: Bono no encontrado para la clase proporcionada');
  }

  return bono;
}



  /**
   * Listar todos los bonos de un usuario.
   */
  async findAllBonosByUsuario(userId: number): Promise<Bono[]> {
    return this.bonoRepository.find({ where: { usuario: { id: userId } } });
  }

  /**
   * Eliminar un bono por ID.
   */
  async deleteBono(id: number): Promise<void> {
    const bono = await this.bonoRepository.findOne({ where: { id } });

    if (!bono) {
      throw new NotFoundException('Bono no encontrado');
    }

    if (bono.calificacion > 4) {
      throw new BadRequestException('No se puede eliminar un bono con calificación mayor a 4');
    }

    await this.bonoRepository.delete(id);
  }
}
