import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Db} from '../config/db.config'; 
import { associate } from './util/associateModels';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  try {  
    await associate(); 
    await Db 
    .sync({force: true})
    // .sync()
    .then(async () => { 
      console.log("connected to db ....")
    });
    await app.listen(8080, () => { 
      console.log("server is running on pot 8080 ....")
    }); 
  } catch (err) { 
    console.log(err); 
    console.log("Error: Something Went Wrong While Connecting to Db")
  }
}
bootstrap();
