import { Injectable } from '@nestjs/common';
import { CreateCommercialDto } from './dto/create-commercial.dto';
import { UpdateCommercialDto } from './dto/update-commercial.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Commercials } from './entities/commercial.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CommercialsService {
  constructor(
    @InjectRepository(Commercials)private commercialsRepository:Repository<Commercials>
  ){}

  async create(createCommercialDto: CreateCommercialDto) {
    const commercials = this.commercialsRepository.create(createCommercialDto);
    await this.commercialsRepository.save(commercials);
    return commercials;
  }

  findAll() {
    return this.commercialsRepository.find();
  }

  findOne(id: string) {
    return this.commercialsRepository.findOne(
      {
        where: {id}
      }
    );
  }

  async update(id: string, updateCommercialDto: UpdateCommercialDto) {
    await this.commercialsRepository.update(id, updateCommercialDto)
  }

  remove(id: string) {
    this.commercialsRepository.delete(id)
    return `This action removes a #${id} commercial`;
  }
}
