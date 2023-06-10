import { Injectable } from '@nestjs/common';
import { CreateSportDto } from './dto/create-sport.dto';
import { UpdateSportDto } from './dto/update-sport.dto';
import { InjectRepository } from '@nestjs/typeorm';
import {  Sports } from './entities/sport.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SportsService {
  constructor(
    @InjectRepository(Sports)private sportsRepository: Repository<Sports>
  ){}
  
  async create(createSportDto: CreateSportDto) {
   const sports = this.sportsRepository.create(createSportDto);
   await this.sportsRepository.save(sports);
   return sports;

  }

  findAll() {
    return this.sportsRepository.find();
  }

  findOne(id: string) {
    return this.sportsRepository.findOne(
      {
        where: {id}
      }
    );
  }

  async updateSports(id: string, sports: Sports): Promise<void> {
    await this.sportsRepository.update(id, sports)
  }

  remove(id: string) {
    this.sportsRepository.delete(id);
    return `This action removes a #${id} sport`;
  }
}
