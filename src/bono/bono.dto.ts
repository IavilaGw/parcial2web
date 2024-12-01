import { IsNotEmpty, IsNumber, IsString, Min, Max } from 'class-validator';

export class BonoDto {
  @IsNumber()
  @IsNotEmpty()
  @Min(0.01, { message: 'El monto debe ser mayor a 0' })
  readonly monto: number;

  @IsNumber({ allowNaN: false })
  @IsNotEmpty()
  @Min(0, { message: 'La calificación debe ser como mínimo 0' })
  @Max(5, { message: 'La calificación no puede exceder 5' })
  readonly calificacion: number;

  @IsString()
  @IsNotEmpty({ message: 'La palabra clave no puede estar vacía' })
  readonly palabraClave: string;

  @IsNumber()
  @IsNotEmpty({ message: 'El ID del usuario es requerido' })
  readonly usuarioId: number;

  @IsNumber()
  @IsNotEmpty({ message: 'El ID de la clase es requerido' })
  readonly claseId: number;
}
