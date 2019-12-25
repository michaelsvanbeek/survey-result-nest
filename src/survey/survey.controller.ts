import { Controller, Get, Post, Put, Body, Param, Delete } from '@nestjs/common';
import { CreateSurveyDTO } from './dto/create-survey.dto';
import { SurveysService } from './surveys.service';
import { Survey } from './survey.interface';

@Controller('surveys')
export class SurveysController {
  constructor(private readonly surveysService: SurveysService) { }

  @Post()
  async create(@Body() createSurveyDto: CreateSurveyDTO) {
    await this.surveysService.create(createSurveyDto);
  }

  @Get(':surveyId')
  async read(@Param('surveyId') surveyId) {
    return this.surveysService.read(surveyId);
  }

  @Get()
  async readAll(): Promise<Survey[]> {
    return this.surveysService.readAll();
  }

  @Put(':surveyId')
  async update(@Param('surveyId') surveyId, @Body() createSurveyDto: CreateSurveyDTO) {
    return this.surveysService.update(surveyId, createSurveyDto);
  }

  @Delete(':surveyId')
  async delete(@Param('surveyId') surveyId) {
    return this.surveysService.delete(surveyId);
  }
}
