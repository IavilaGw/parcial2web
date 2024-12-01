import { Body, Controller, Delete, Get, HttpCode, Param, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario.entity';
import { plainToInstance } from 'class-transformer';
import { UsuarioDto } from './usuario.dto';

@Controller('usuarios')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Post()
  async create(@Body() usuarioDto: UsuarioDto): Promise<Usuario> {
    const usuario = plainToInstance(Usuario, usuarioDto);
    return await this.usuarioService.crearUsuario(usuario);
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Usuario> {
    return await this.usuarioService.findUsuarioById(parseInt(id, 10));
  }

  @Delete(':id')
  @HttpCode(200)
  async delete(@Param('id') id: string): Promise<{ message: string }> {
    await this.usuarioService.eliminarUsuario(parseInt(id, 10));
    return { message: `Usuario con ID ${id} eliminado correctamente.` };
  }
}
