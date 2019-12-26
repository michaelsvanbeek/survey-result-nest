import * as mongoose from 'mongoose';
import { QuestionSchema } from './question.schema';

export const SurveySchema = new mongoose.Schema({
  name: String,
  initialState: mongoose.Schema.Types.Mixed,
  questions: [QuestionSchema],
  result: String,
});
