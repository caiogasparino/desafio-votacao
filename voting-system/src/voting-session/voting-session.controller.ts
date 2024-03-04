import { Body, Controller, Post } from '@nestjs/common';
import { VotingSessionService } from './voting-session.service';
import { CreateVotingSessionDto } from './dto/create-voting-session.dto';

@Controller('voting-session')
export class VotingSessionController {
  constructor(private readonly votingSessionService: VotingSessionService) {}

  @Post('open')
  open(@Body() createVotingSessionDto: CreateVotingSessionDto) {
    return this.votingSessionService.open(createVotingSessionDto);
  }
}
