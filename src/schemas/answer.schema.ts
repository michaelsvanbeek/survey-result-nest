import * as mongoose from 'mongoose';

export const AnswerSchema = new mongoose.Schema({
  answer: String,
  action: String,
  selectedIf: String,
});
