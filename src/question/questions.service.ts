import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Question } from './question.interface';
import { CreateQuestionDTO } from './dto/create-question.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @Inject('QUESTION_MODEL')
    private readonly questionModel: Model<Question>,
  ) {}

  async create(createQuestionDto: CreateQuestionDTO): Promise<Question> {
    const createdQuestion = new this.questionModel(createQuestionDto);
    return await createdQuestion.save();
  }

  async findAll(): Promise<Question[]> {
    return await this.questionModel.find().exec();
  }
}
