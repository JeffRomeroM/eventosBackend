import { Module } from '@nestjs/common';
import { GastronomiesService } from './gastronomies.service';
import { GastronomiesController } from './gastronomies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gastronomies } from './entities/gastronomy.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gastronomies])],
  controllers: [GastronomiesController],
  providers: [GastronomiesService]
})
export class GastronomiesModule {}
