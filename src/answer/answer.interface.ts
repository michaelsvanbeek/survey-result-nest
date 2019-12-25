import { Document } from 'mongoose';

export interface Answer extends Document {
  readonly answer: string;
  readonly action: string;
  readonly selectedIf: string;
}
