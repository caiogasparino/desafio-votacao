import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Agenda, AgendaDocument } from './schemas/agenda.schema';
import { CreateAgendaDto } from './dto/create-agenda.dto';

@Injectable()
export class AgendaService {
  constructor(
    @InjectModel(Agenda.name) private agendaModel: Model<AgendaDocument>,
  ) {}

  async create(createAgendaDto: CreateAgendaDto): Promise<Agenda> {
    const createdAgenda = new this.agendaModel(createAgendaDto);
    return createdAgenda.save();
  }

  async findAll(): Promise<Agenda[]> {
    return this.agendaModel.find().exec();
  }
}
