import { Test, TestingModule } from '@nestjs/testing';
import { BonoService } from './bono.service';
import { Bono } from './bono.entity';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Clase } from '../clase/clase.entity';

describe('BonoService', () => {
  let service: BonoService;
  let bonoRepository: Repository<Bono>;
  let usuarioRepository: Repository<Usuario>;
  let claseRepository: Repository<Clase>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BonoService,
        {
          provide: getRepositoryToken(Bono),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Usuario),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Clase),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<BonoService>(BonoService);
    bonoRepository = module.get<Repository<Bono>>(getRepositoryToken(Bono));
    usuarioRepository = module.get<Repository<Usuario>>(getRepositoryToken(Usuario));
    claseRepository = module.get<Repository<Clase>>(getRepositoryToken(Clase));
  });

  it('should create a valid bono with associated class', async () => {
    const bonoData = { monto: 100, palabraClave: 'BONO123' };

    const usuario = new Usuario();
    usuario.id = 1;
    usuario.rol = 'Profesor';

    const clase = new Clase();
    clase.id = 1;
    clase.nombre = 'Clase de Matemáticas';

    const bono = new Bono();
    bono.id = 1;
    bono.monto = 100;
    bono.palabraClave = 'BONO123';
    bono.usuario = usuario;
    bono.clase = clase;

    jest.spyOn(usuarioRepository, 'findOne').mockResolvedValue(usuario);
    jest.spyOn(claseRepository, 'findOne').mockResolvedValue(clase);
    jest.spyOn(bonoRepository, 'create').mockReturnValue(bono);
    jest.spyOn(bonoRepository, 'save').mockResolvedValue(bono);

    const result = await service.crearBono(bonoData, 1, 1);

    expect(result).toEqual(bono);
    expect(result.usuario).toEqual(usuario);
    expect(result.clase).toEqual(clase);
  });

  it('should throw BadRequestException if monto is invalid', async () => {
    const bonoData = { monto: -1, palabraClave: 'BONO123' };

    await expect(service.crearBono(bonoData, 1, 1)).rejects.toThrowError(
      new BadRequestException('El monto no puede ser negativo o cero')
    );
  });

  it('should throw BadRequestException if class not found', async () => {
    const bonoData = { monto: 100, palabraClave: 'BONO123' };

    const usuario = new Usuario();
    usuario.id = 1;
    usuario.rol = 'Profesor';

    jest.spyOn(usuarioRepository, 'findOne').mockResolvedValue(usuario);
    jest.spyOn(claseRepository, 'findOne').mockResolvedValue(null);

    await expect(service.crearBono(bonoData, 1, 99)).rejects.toThrowError(
      new BadRequestException('Clase no encontrada')
    );
  });

  it('should throw BadRequestException if user is not a Profesor', async () => {
    const bonoData = { monto: 100, palabraClave: 'BONO123' };

    const usuario = new Usuario();
    usuario.id = 1;
    usuario.rol = 'Estudiante';

    jest.spyOn(usuarioRepository, 'findOne').mockResolvedValue(usuario);

    await expect(service.crearBono(bonoData, 1, 1)).rejects.toThrowError(
      new BadRequestException('El usuario no es de tipo Profesor')
    );
  });

  it('should throw NotFoundException if bono not found', async () => {
    jest.spyOn(bonoRepository, 'findOne').mockResolvedValue(null);

    await expect(service.findBonoByCodigo('INVALID_CODE')).rejects.toThrowError(
      new NotFoundException('Bono no encontrado')
    );
  });
});
