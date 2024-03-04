// src/votes/votes.controller.ts
import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { VotesService } from './votes.service';
import { CreateVoteDto } from './dto/create-vote.dto';

@Controller('votes')
export class VotesController {
  constructor(private readonly votesService: VotesService) {}

  @Post()
  create(@Body() createVoteDto: CreateVoteDto) {
    return this.votesService.create(createVoteDto);
  }

  @Get('result/:agendaId')
  getResult(@Param('agendaId') agendaId: string) {
    return this.votesService.countVotes(agendaId);
  }
}
