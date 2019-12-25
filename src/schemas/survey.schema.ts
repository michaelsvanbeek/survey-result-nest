import * as mongoose from 'mongoose';
import { QuestionSchema } from './question.schema';

export const SurveySchema = new mongoose.Schema({
  name: String,
  questions: [QuestionSchema],
});
