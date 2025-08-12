import { Injectable } from '@nestjs/common';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Modelo } from '@prisma/client';

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

  update(id: number, updateModeloDto: UpdateModeloDto) {
    return `This action updates a #${id} modelo`;
  }

  remove(id: number) {
    return `This action removes a #${id} modelo`;
  }
}
