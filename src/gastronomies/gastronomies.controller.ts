import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GastronomiesService } from './gastronomies.service';
import { CreateGastronomyDto } from './dto/create-gastronomy.dto';
import { UpdateGastronomyDto } from './dto/update-gastronomy.dto';
import { Gastronomies } from './entities/gastronomy.entity';

@Controller('gastronomies')
export class GastronomiesController {
  constructor(private readonly gastronomiesService: GastronomiesService) {}

  @Post()
  create(@Body() createGastronomyDto: CreateGastronomyDto) {
    return this.gastronomiesService.create(createGastronomyDto);
  }

  @Get()
  findAll() {
    return this.gastronomiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gastronomiesService.findOne(id);
  }

  @Patch(':id')
  updateGastronomies(@Param('id') id: string, @Body() gastronomies: Gastronomies) {
    return this.gastronomiesService.updateGastronomies(id, gastronomies);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gastronomiesService.remove(id);
  }
}
