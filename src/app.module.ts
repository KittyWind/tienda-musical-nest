import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModeloModule } from './modelo/modelo.module';
import { PrismaModule } from './prisma/prisma.module';
import { ProductoModule } from './producto/producto.module';

@Module({
  imports: [ModeloModule, PrismaModule, ProductoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
