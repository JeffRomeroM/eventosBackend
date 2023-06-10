import { Injectable } from '@nestjs/common';
import { CreateGastronomyDto } from './dto/create-gastronomy.dto';
import { UpdateGastronomyDto } from './dto/update-gastronomy.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gastronomies } from './entities/gastronomy.entity';

@Injectable()
export class GastronomiesService {
  constructor(
    @InjectRepository(Gastronomies)private gastronomiesRepository: Repository<Gastronomies>
  ){}


  async create(createGastronomyDto: CreateGastronomyDto) {
    const gastronomies = this.gastronomiesRepository.create(createGastronomyDto);
    await this.gastronomiesRepository.save(gastronomies);
    return gastronomies;
  }

  findAll() {
    return this.gastronomiesRepository.find();
  }

  findOne(id: string) {
    return this.gastronomiesRepository.findOne(
      {
        where: {id}
      }
    );
  }

  async updateGastronomies(id: string, gastronomies: Gastronomies): Promise<void> {
    await this.gastronomiesRepository.update(id, gastronomies)
  }

  remove(id: string) {
    this.gastronomiesRepository.delete(id);
    return "Eliminado"
  }
}
