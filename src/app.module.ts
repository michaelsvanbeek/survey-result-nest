import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnswerModule } from './answer/answer.module';
import { QuestionModule } from './question/question.module';
import { SurveyModule } from './survey/survey.module';

@Module({
  imports: [
    AnswerModule,
    QuestionModule,
    SurveyModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
