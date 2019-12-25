import { Module } from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { questionsProviders } from './questions.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    QuestionsService,
    ...questionsProviders,
  ],
})
export class QuestionModule { }
