import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Answer } from './answer.interface';
import { CreateAnswerDTO } from './dto/create-answer.dto';

@Injectable()
export class AnswersService {
  constructor(
    @Inject('ANSWER_MODEL')
    private readonly answerModel: Model<Answer>,
  ) { }

  async create(createAnswerDto: CreateAnswerDTO): Promise<Answer> {
    const createdAnswer = new this.answerModel(createAnswerDto);
    return await createdAnswer.save();
  }

  async findAll(): Promise<Answer[]> {
    return await this.answerModel.find().exec();
  }
}
