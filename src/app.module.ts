import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { BonoModule } from './bono/bono.module';
import { ClaseModule } from './clase/clase.module';
import { Usuario } from './usuario/usuario.entity';
import { Bono } from './bono/bono.entity';
import { Clase } from './clase/clase.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [UsuarioModule, BonoModule, ClaseModule,
    TypeOrmModule.forRoot({
     type: 'postgres',
     host: 'localhost',
     port: 5432,
     username: 'postgres',
     password: 'postgres',
     database: 'parcial2',
     entities: [Usuario, Bono,Clase],
     dropSchema: true,
     synchronize: true,
     keepConnectionAlive: true
   }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
