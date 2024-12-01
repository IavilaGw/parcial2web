import { Test, TestingModule } from '@nestjs/testing';
import { ClaseService } from './clase.service';
import { Clase } from './clase.entity';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

describe('ClaseService', () => {
  let service: ClaseService;
  let claseRepository: Repository<Clase>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ClaseService,
        {
          provide: getRepositoryToken(Clase),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ClaseService>(ClaseService);
    claseRepository = module.get<Repository<Clase>>(getRepositoryToken(Clase));
  });


  it('should create a valid class', async () => {
    const claseData = { nombre: 'Clase de Ejemplo', codigo: 'CLASE123', numeroCreditos: 3 };
    const nuevaClase = new Clase();
    nuevaClase.id = 1;
    nuevaClase.nombre = 'Clase de Ejemplo';
    nuevaClase.codigo = 'CLASE123';
    nuevaClase.numeroCreditos = 3;

    jest.spyOn(claseRepository, 'create').mockReturnValue(nuevaClase);
    jest.spyOn(claseRepository, 'save').mockResolvedValue(nuevaClase);

    const result = await service.crearClase(claseData);
    expect(result).toEqual(nuevaClase);
  });

  // Caso negativo: Crear una clase con un código inválido
  it('should throw BadRequestException if class code is invalid', async () => {
    const claseData = { nombre: 'Clase de Ejemplo', codigo: 'INVALID', numeroCreditos: 3 };

    await expect(service.crearClase(claseData)).rejects.toThrowError(
      new BadRequestException('no tiene 10 caracteres.')
    );
  });

  // Caso negativo: Buscar una clase que no existe
  it('should throw NotFoundException if class not found', async () => {
    jest.spyOn(claseRepository, 'findOne').mockResolvedValue(null);

    await expect(service.findClaseById(999)).rejects.toThrowError(
      new NotFoundException('Clase no esta.')
    );
  });
});
