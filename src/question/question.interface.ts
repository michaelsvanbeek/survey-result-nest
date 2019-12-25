import { Document } from 'mongoose';
import { Answer } from '../answer/answer.interface';

export interface Question extends Document {
  readonly question: string;
  readonly answers: Answer[];
}
