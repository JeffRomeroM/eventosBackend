import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommercialsService } from './commercials.service';
import { CreateCommercialDto } from './dto/create-commercial.dto';
import { UpdateCommercialDto } from './dto/update-commercial.dto';

@Controller('commercials')
export class CommercialsController {
  constructor(private readonly commercialsService: CommercialsService) {}

  @Post()
  create(@Body() createCommercialDto: CreateCommercialDto) {
    return this.commercialsService.create(createCommercialDto);
  }

  @Get()
  findAll() {
    return this.commercialsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commercialsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommercialDto: UpdateCommercialDto) {
    return this.commercialsService.update(id, updateCommercialDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commercialsService.remove(id);
  }
}
