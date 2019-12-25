import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { Survey } from './survey.interface';
import { CreateSurveyDTO } from './dto/create-survey.dto';

@Injectable()
export class SurveysService {
  constructor(
    @Inject('SURVEY_MODEL')
    private readonly surveyModel: Model<Survey>,
  ) { }

  async create(createSurveyDto: CreateSurveyDTO): Promise<Survey> {
    const createdSurvey = new this.surveyModel(createSurveyDto);
    return await createdSurvey.save();
  }

  async read(surveyId): Promise<Survey> {
    return await this.surveyModel.findById(surveyId);
  }

  async update(surveyId, updateSurveyDto: CreateSurveyDTO): Promise<Survey> {
    return await this.surveyModel.findOneAndUpdate(surveyId, updateSurveyDto);
  }

  async readAll(): Promise<Survey[]> {
    return await this.surveyModel.find().exec();
  }

  async delete(surveyId): Promise<any> {
    return await this.surveyModel.findByIdAndDelete(surveyId);
  }
}
