import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Clase } from '../clase/clase.entity';
import { Bono } from '../bono/bono.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cedula: number;

  @Column()
  nombre: string;

  @Column({ nullable: true })
  grupoInvestigacion: string;

  @Column()
  numeroExtension: number;

  @Column({ type: 'enum', enum: ['Profesor', 'Decana'] })
  rol: string;

  @ManyToOne(() => Usuario, (usuario) => usuario.subordinados, { nullable: true })
  jefe: Usuario;

  @OneToMany(() => Usuario, (usuario) => usuario.jefe)
  subordinados: Usuario[];

  @OneToMany(() => Bono, (bono) => bono.usuario)
  bonos: Bono[];

  @OneToMany(() => Clase, (clase) => clase.profesor)
  clases: Clase[];
}
