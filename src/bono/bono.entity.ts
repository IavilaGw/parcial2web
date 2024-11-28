import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity'; 
import { Clase } from '../clase/clase.entity'; 


@Entity()
export class Bono {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  monto: number;

  @Column('double precision')
  calificacion: number;

  @Column()
  palabraClave: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.bonos)
  usuario: Usuario;

  @ManyToOne(() => Clase, (clase) => clase.bonos)
  clase: Clase;
}
