import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { MoviesService } from './services/movies.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly movieService: MoviesService) { }

  @Get('getMovieTitles')
  async getMovieTitles(@Query('substr') substr: string): Promise<string[]> {
    return await this.movieService.getMovieTitles(substr);
  }
}
