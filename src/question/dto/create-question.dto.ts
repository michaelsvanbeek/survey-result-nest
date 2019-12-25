import { CreateAnswerDTO } from '../../answer/dto/create-answer.dto';

export class CreateQuestionDTO {
  readonly question: string;
  readonly answers: CreateAnswerDTO[];
}
