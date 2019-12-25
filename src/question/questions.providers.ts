import { Connection } from 'mongoose';
import { QuestionSchema } from '../schemas/question.schema';

export const questionsProviders = [
  {
    provide: 'QUESTION_MODEL',
    useFactory: (connection: Connection) => connection.model('Question', QuestionSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
