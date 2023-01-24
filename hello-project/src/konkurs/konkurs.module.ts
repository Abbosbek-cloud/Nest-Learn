import { Module } from '@nestjs/common';
import { KonkursController } from './konkurs.controller';
import { KonkursService } from './konkurs.service';

@Module({
  controllers: [KonkursController],
  providers: [KonkursService],
})

console.log('lorem');

export class KonkursModule {}
