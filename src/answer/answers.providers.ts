import { Connection } from 'mongoose';
import { AnswerSchema } from '../schemas/answer.schema';

export const answersProviders = [
  {
    provide: 'ANSWER_MODEL',
    useFactory: (connection: Connection) => connection.model('Answer', AnswerSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
