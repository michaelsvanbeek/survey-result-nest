import { Module } from '@nestjs/common';
import { SurveysController } from './survey.controller';
import { SurveysService } from './surveys.service';
import { surveysProviders } from './surveys.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [SurveysController],
  providers: [
    SurveysService,
    ...surveysProviders,
  ],
})
export class SurveyModule { }
