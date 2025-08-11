import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModeloModule } from './modelo/modelo.module';

@Module({
  imports: [ModeloModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
