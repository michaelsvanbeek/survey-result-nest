import * as mongoose from 'mongoose';
import { AnswerSchema } from './answer.schema';

export const QuestionSchema = new mongoose.Schema({
  question: String,
  answers: [AnswerSchema],
});
