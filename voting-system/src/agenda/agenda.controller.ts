// src/agenda/agenda.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AgendaService } from './agenda.service';
import { CreateAgendaDto } from './dto/create-agenda.dto';
import { Agenda } from './schemas/agenda.schema';

@Controller('agenda')
export class AgendaController {
  constructor(private readonly agendaService: AgendaService) {}

  @Post()
  create(@Body() createAgendaDto: CreateAgendaDto) {
    return this.agendaService.create(createAgendaDto);
  }

  @Get()
  findAll(): Promise<Agenda[]> {
    return this.agendaService.findAll();
  }
}
