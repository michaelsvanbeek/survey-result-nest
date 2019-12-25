import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { answersProviders } from './answers.providers';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [
    AnswersService,
    ...answersProviders,
  ],
})
export class AnswerModule { }
