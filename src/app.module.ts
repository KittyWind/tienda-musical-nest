import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModeloModule } from './modelo/modelo.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ModeloModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
