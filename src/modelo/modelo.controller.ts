import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, NotFoundException } from '@nestjs/common';
import { ModeloService } from './modelo.service';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { Modelo } from '@prisma/client';

@Controller('modelo')
export class ModeloController {
  constructor(private readonly modeloService: ModeloService) {}

  @Post()
  create(@Body() createModeloDto: CreateModeloDto) {
    return this.modeloService.create(createModeloDto);
  }

  @Get()
  findAll() {
    return this.modeloService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id',ParseIntPipe) id: number): Promise<Modelo | null> {
    const modelo= await this.modeloService.findOne(id);
    if(!modelo){
      throw new NotFoundException('modelo no encontrado');
    }
    return modelo;
  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() updateModeloDto: UpdateModeloDto) {
    return this.modeloService.update(id, updateModeloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modeloService.remove(+id);
  }
}
