import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity'; 
import { Bono } from '../bono/bono.entity';          

@Entity()
export class Clase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  codigo: string;

  @Column()
  numeroCreditos: number;

  @ManyToOne(() => Usuario, (usuario) => usuario.clases)
  profesor: Usuario;

  @OneToMany(() => Bono, (bono) => bono.clase)
  bonos: Bono[];
}
