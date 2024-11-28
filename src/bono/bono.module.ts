import { Module } from '@nestjs/common';
import { BonoService} from '../bono/bono.service';

@Module({
  providers: [BonoService]
})
export class BonoModule {}
