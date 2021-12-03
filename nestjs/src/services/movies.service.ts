import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios'
import { Sequelize } from 'sequelize-typescript';
import { AxiosResponse } from 'axios'
import { orderBy } from '../utils/collectionUtils';
import { IMDBResponse, IMDBMovie } from './imdb';


@Injectable()
export class MoviesService {

    constructor(
        private sequelize: Sequelize,
        private httpService: HttpService) {

    }

    async getMovieTitles(substr: string): Promise<string[]> {
        let responseImdb: AxiosResponse<IMDBResponse> = await this.httpService.get(`https://imdb-api.com/en/API/SearchAll/k_foixorzk/${substr}`).toPromise()
        let titles = responseImdb.data.results.map((movie) => movie.title).sort(orderBy(title => title?.toLowerCase()));
        return titles;
    }
}
