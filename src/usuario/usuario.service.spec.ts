import { Test, TestingModule } from '@nestjs/testing';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';
import { BadRequestException, NotFoundException } from '@nestjs/common';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bono } from '../bono/bono.entity';

describe('UsuarioService', () => {
  let service: UsuarioService;
  let usuarioRepository: Repository<Usuario>;
  let bonoRepository: Repository<Bono>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsuarioService,
        {
          provide: getRepositoryToken(Usuario),
          useClass: Repository,
        },
        {
          provide: getRepositoryToken(Bono),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<UsuarioService>(UsuarioService);
    usuarioRepository = module.get<Repository<Usuario>>(getRepositoryToken(Usuario));
    bonoRepository = module.get<Repository<Bono>>(getRepositoryToken(Bono));
  });

  // Caso positivo: Crear un usuario válido
  it('should create a valid user', async () => {
    const usuarioData = { id: 1, rol: 'Profesor', grupoInvestigacion: 'TICSW' };
    const nuevoUsuario = new Usuario();
    nuevoUsuario.id = 1;
    nuevoUsuario.rol = 'Profesor';
    nuevoUsuario.grupoInvestigacion = 'TICSW';

    jest.spyOn(usuarioRepository, 'create').mockReturnValue(nuevoUsuario);
    jest.spyOn(usuarioRepository, 'save').mockResolvedValue(nuevoUsuario);

    const result = await service.crearUsuario(usuarioData);
    expect(result).toEqual(nuevoUsuario);
  });

  // Caso negativo: Crear un usuario con un grupo de investigación inválido
  it('should throw BadRequestException if group is invalid for Profesor role', async () => {
    const usuarioData = { rol: 'Profesor', grupoInvestigacion: 'INVALID' };

    await expect(service.crearUsuario(usuarioData)).rejects.toThrowError(
      new BadRequestException('E.')
    );
  });

  // Caso negativo: Eliminar usuario con bonos
  it('should throw BadRequestException if user has bonos', async () => {
    const usuario = new Usuario();
    usuario.id = 1;
    usuario.rol = 'Profesor';

    const bono = new Bono();
    bono.usuario = usuario;

    jest.spyOn(usuarioRepository, 'findOne').mockResolvedValue(usuario as any);
    jest.spyOn(bonoRepository, 'find').mockResolvedValue([bono]);

    await expect(service.eliminarUsuario(1)).rejects.toThrowError(
      new BadRequestException('No se puede eliminar un usuario que tiene bono.')
    );
  });

  // Caso negativo: Eliminar usuario que no existe
  it('should throw NotFoundException if user not found', async () => {
    jest.spyOn(usuarioRepository, 'findOne').mockResolvedValue(null);

    await expect(service.eliminarUsuario(999)).rejects.toThrowError(
      new NotFoundException('No encontrado.')
    );
  });
});
