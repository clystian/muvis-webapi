import { Module } from '@nestjs/common';
import { HttpModule, HttpService} from '@nestjs/axios'
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Movie } from './models';
import { MoviesService } from './services/movies.service';


@Module({
  imports: [HttpModule, SequelizeModule.forRoot({
    dialect: 'sqlite',
    storage: 'db/muvis.sqlite',
    models: [Movie],
  }),],
  controllers: [AppController],
  providers: [AppService, MoviesService],
})
export class AppModule { }
