import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina automáticamente los campos que no están en el DTO
      forbidNonWhitelisted: true, // Lanza un error si se envían campos no permitidos
      transform: true, // Transforma los datos de entrada a su tipo de DTO (ej: un string "123" a un number 123)
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
