import { CreateQuestionDTO } from '../../question/dto/create-question.dto';

export class CreateSurveyDTO {
  readonly name: string;
  readonly questions: CreateQuestionDTO[];
}
