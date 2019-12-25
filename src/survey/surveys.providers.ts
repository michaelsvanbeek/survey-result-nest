import { Connection } from 'mongoose';
import { SurveySchema } from '../schemas/survey.schema';

export const surveysProviders = [
  {
    provide: 'SURVEY_MODEL',
    useFactory: (connection: Connection) => connection.model('Survey', SurveySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
