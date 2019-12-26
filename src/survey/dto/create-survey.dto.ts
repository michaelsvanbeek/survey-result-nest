import { CreateQuestionDTO } from '../../question/dto/create-question.dto';

export class CreateSurveyDTO {
  readonly name: string;
  readonly initialState: object;
  readonly questions: CreateQuestionDTO[];
  readonly result: string;
}
