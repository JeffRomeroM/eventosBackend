import { Module } from '@nestjs/common';
import { CommercialsService } from './commercials.service';
import { CommercialsController } from './commercials.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Commercials } from './entities/commercial.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Commercials])],
  controllers: [CommercialsController],
  providers: [CommercialsService]
})
export class CommercialsModule {}
