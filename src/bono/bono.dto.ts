/* eslint-disable prettier/prettier */
import { IsNotEmpty, IsNumber, IsString, Min, Max } from 'class-validator';

export class BonoDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  monto: number;

  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(5)
  calificacion: number;

  @IsNotEmpty()
  @IsString()
  palabraClave: string;
}
