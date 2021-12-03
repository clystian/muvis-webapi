import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/getMovieTitles (GET)', () => {
    return request(app.getHttpServer())
      .get('/getMovieTitles?substr=spiderman')
      .expect(200)
      .expect(["Helio Castroneves", "Kendall Schmidt", "Spider-Man", "spider-man", "spider-man-character", "Spider-Man: No Way Home", "Spiderman", "The Amazing Spider-Man", "The Amazing Spider-Man 2"]);
  });
});
