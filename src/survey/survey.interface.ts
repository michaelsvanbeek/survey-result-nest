import { Document } from 'mongoose';
import { Question } from '../question/question.interface';

export interface Survey extends Document {
  readonly name: string;
  readonly questions: Question[];
}
