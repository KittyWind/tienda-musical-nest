import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Modelo, Prisma } from '@prisma/client';

@Injectable()
export class ModeloService {
  constructor(private prisma: PrismaService){}
  create(createModeloDto: CreateModeloDto) {
    return this.prisma.modelo.create({
      data: createModeloDto
    })
  }

  findAll() {
    return this.prisma.modelo.findMany();
  }

  async findOne(id: number): Promise<Modelo | null> {
    return this.prisma.modelo.findFirst({
      where: {
        id: id
      }
    })
  }

  async update(id: number, updateModeloDto: UpdateModeloDto){
    try{
      return await this.prisma.modelo.update({
        where: {id: id},
        data: updateModeloDto
      })
    } catch (error) {
      // Comprobamos si el error es el específico de "registro no encontrado" de Prisma.
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2025' // 'P2025' es el código de Prisma para "Record to update not found."
      ) {
        throw new NotFoundException(`modelo not found`);
      }
      // Si es otro tipo de error, lo relanzamos para que lo maneje un filtro de excepción global.
      throw error;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} modelo`;
  }
}
