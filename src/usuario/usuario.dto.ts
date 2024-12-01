import { IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UsuarioDto {
  @IsNumber()
  @IsNotEmpty()
  readonly cedula: number;

  @IsString()
  @IsNotEmpty()
  readonly nombre: string;

  @IsString()
  @IsOptional()
  readonly grupoInvestigacion?: string;

  @IsNumber()
  @IsNotEmpty()
  readonly numeroExtension: number;

  @IsEnum(['Profesor', 'Decana'])
  @IsNotEmpty()
  readonly rol: string;

  @IsNumber()
  @IsOptional()
  readonly jefeId?: number; 
}
