import { Module } from '@nestjs/common';
import { SportsService } from './sports.service';
import { SportsController } from './sports.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sports } from './entities/sport.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Sports])],
  controllers: [SportsController],
  providers: [SportsService]
})
export class SportsModule {}
