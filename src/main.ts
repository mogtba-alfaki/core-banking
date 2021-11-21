import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Db } from 'config/db.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  try {
    Db
    .sync()
    .then(async () => { 
      console.log("connected to db ....")
      await app.listen(3000); 
    });
  } catch (err) {
    console.log("Error: Something Went Wrong While Connecting to Db")
  }
}
bootstrap();
